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

/**
 * Provider of the media file.
 */
export type ContentProvider = {
  /**
   * Provider of the image file.
   */
  type: ContentProvider.TypeEnum /**/;
  /**
   * URL of the image file. Only included when contentProvider.type is external.
   */
  originalContentUrl?: string /**/;
  /**
   * URL of the preview image. Only included when contentProvider.type is external.
   */
  previewImageUrl?: string /**/;
};

export namespace ContentProvider {
  export type TypeEnum = "line";
  "external";
}
