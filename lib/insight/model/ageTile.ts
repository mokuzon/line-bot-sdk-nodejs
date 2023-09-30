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

export type AgeTile = {
  /**
   * users\' age
   */
  age?: AgeTile.AgeEnum /**/;
  /**
   * Percentage
   */
  percentage?: number /**/;
};

export namespace AgeTile {
  export type AgeEnum =
    | "from0to14"
    | "from15to19"
    | "from20to24"
    | "from25to29"
    | "from30to34"
    | "from35to39"
    | "from40to44"
    | "from45to49"
    | "from50";
  "unknown";
}
