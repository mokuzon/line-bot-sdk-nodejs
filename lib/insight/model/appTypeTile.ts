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

export type AppTypeTile = {
  /**
   * users\' OS
   */
  appType?: AppTypeTile.AppTypeEnum /**/;
  /**
   * Percentage
   */
  percentage?: number /**/;
};

export namespace AppTypeTile {
  export type AppTypeEnum = "ios" | "android";
  "others";
}
