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
import { Event } from "./event";

/**
 * The request body contains a JSON object with the user ID of a bot that should receive webhook events and an array of webhook event objects.
 */
export type CallbackRequest = {
  /**
   * User ID of a bot that should receive webhook events. The user ID value is a string that matches the regular expression, `U[0-9a-f]{32}`.
   */
  destination?: string /**/;
  /**
   * Array of webhook event objects. The LINE Platform may send an empty array that doesn\'t include a webhook event object to confirm communication.
   */
  events?: Array<Event> /**/;
};
