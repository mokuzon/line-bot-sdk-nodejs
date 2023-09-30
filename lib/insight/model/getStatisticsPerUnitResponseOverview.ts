/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Statistics related to messages.
 */
export type GetStatisticsPerUnitResponseOverview = {
  /**
   * Number of users who opened the message, meaning they displayed at least 1 bubble.
   */
  uniqueImpression?: number | null /**/;
  /**
   * Number of users who opened any URL in the message.
   */
  uniqueClick?: number | null /**/;
  /**
   * Number of users who started playing any video or audio in the message.
   */
  uniqueMediaPlayed?: number | null /**/;
  /**
   * Number of users who played the entirety of any video or audio in the message.
   */
  uniqueMediaPlayed100Percent?: number | null /**/;
};
