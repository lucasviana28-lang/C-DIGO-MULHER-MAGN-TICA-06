'use server';
/**
 * @fileOverview This file implements a Genkit flow that analyzes a user's relationship situation
 * to determine potential causes of oxytocin depletion in their partner and provides a personalized
 * strategy for emotional reconnection.
 *
 * - personalizeReconnectionStrategy - A function to get a personalized reconnection strategy.
 * - PersonalizedReconnectionStrategyInput - The input type for the function.
 * - PersonalizedReconnectionStrategyOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedReconnectionStrategyInputSchema = z.object({
  relationshipStatus: z
    .string()
    .describe('Current status of the relationship (e.g., ex-boyfriend, current partner but distant).'),
  durationOfRelationship: z
    .string()
    .describe('How long the relationship lasted (e.g., 6 months, 5 years).'),
  currentSituation: z
    .string()
    .describe(
      'Detailed description of the current situation (e.g., he is cold and distant, he says it is over, he is with someone else).'
    ),
  pastEfforts: z
    .string()
    .describe('Any actions taken so far to try and reconnect (e.g., called him, gave him space).'),
  hisPersonality: z
    .string()
    .describe('Key aspects of his personality (e.g., proud, rational, confused, emotionally closed off).'),
});

export type PersonalizedReconnectionStrategyInput = z.infer<
  typeof PersonalizedReconnectionStrategyInputSchema
>;

const PersonalizedReconnectionStrategyOutputSchema = z.object({
  oxytocinDepletionAnalysis: z
    .string()
    .describe('An analysis of the potential causes for oxytocin depletion in his brain.'),
  reconnectionStrategy: z
    .array(z.string())
    .describe('A step-by-step personalized strategy to reactivate his emotional connection.'),
});

export type PersonalizedReconnectionStrategyOutput = z.infer<
  typeof PersonalizedReconnectionStrategyOutputSchema
>;

export async function personalizeReconnectionStrategy(
  input: PersonalizedReconnectionStrategyInput
): Promise<PersonalizedReconnectionStrategyOutput> {
  return personalizedReconnectionStrategyFlow(input);
}

const personalizedReconnectionPrompt = ai.definePrompt({
  name: 'personalizedReconnectionPrompt',
  input: { schema: PersonalizedReconnectionStrategyInputSchema },
  output: { schema: PersonalizedReconnectionStrategyOutputSchema },
  prompt: `You are an expert in emotional neuroscience and relationship psychology, specifically focused on male emotional responses and oxytocin dynamics.
Your task is to analyze a given relationship situation and provide insights into potential oxytocin depletion, followed by a personalized strategy to reactivate his emotional connection.

### Relationship Details:
- Relationship Status: {{{relationshipStatus}}}
- Duration of Relationship: {{{durationOfRelationship}}}
- Current Situation: {{{currentSituation}}}
- Past Efforts: {{{pastEfforts}}}
- His Personality: {{{hisPersonality}}}

Based on these details, perform the following:

1.  **Oxytocin Depletion Analysis**: Explain the potential biological and psychological causes for the observed emotional distance or disinterest, focusing on how oxytocin levels might have been affected. Provide a clear and concise explanation.

2.  **Personalized Reconnection Strategy**: Develop a step-by-step, actionable strategy to reactivate his emotional connection by stimulating oxytocin release. The strategy should be tailored to the specific situation and his personality. Provide at least 3 distinct steps.

Your response MUST strictly adhere to the output JSON format described by the schema.
`,
});

const personalizedReconnectionStrategyFlow = ai.defineFlow(
  {
    name: 'personalizedReconnectionStrategyFlow',
    inputSchema: PersonalizedReconnectionStrategyInputSchema,
    outputSchema: PersonalizedReconnectionStrategyOutputSchema,
  },
  async (input) => {
    const { output } = await personalizedReconnectionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate personalized reconnection strategy.');
    }
    return output;
  }
);
