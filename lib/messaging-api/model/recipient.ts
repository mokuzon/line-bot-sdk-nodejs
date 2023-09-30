/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AudienceRecipient } from "./models";
import { OperatorRecipient } from "./models";
import { RedeliveryRecipient } from "./models";

export type Recipient =
  | AudienceRecipient // audience
  | OperatorRecipient // operator
  | RedeliveryRecipient // redelivery
  | UnknownRecipient;

export type UnknownRecipient = RecipientBase & {
  [key: string]: unknown;
};

/**
 * Recipient
 */
export type RecipientBase = {
  /**
   * Type of recipient
   */
  type?: string /**/;
};
