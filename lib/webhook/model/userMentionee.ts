/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Mentionee } from "./mentionee";

/**
 * Mentioned target is user
 */
import { MentioneeBase } from "./models";
export type UserMentionee = MentioneeBase & {
  type: "user";
  /**
   * User ID of the mentioned user. Only included if mention.mentions[].type is user and the user consents to the LINE Official Account obtaining their user profile information.
   */
  userId?: string /**/;
};
