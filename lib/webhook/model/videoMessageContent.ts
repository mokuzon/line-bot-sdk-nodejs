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
import { ContentProvider } from "./contentProvider";
import { MessageContent } from "./messageContent";

import { MessageContentBase } from "./models";
export type VideoMessageContent = MessageContentBase & {
  type: "video";
  /**
   * Message ID
   */
  id: string /**/;
  /**
   * Length of video file (milliseconds)
   */
  duration?: number /**/;
  /**
   */
  contentProvider: ContentProvider /**/;
  /**
   * Quote token to quote this message.
   */
  quoteToken: string /**/;
};
