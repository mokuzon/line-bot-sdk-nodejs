/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Specify the setting for bot link feature with one of the following values:  `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen. `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen. `none`: Don\'t display the option to add the LINE Official Account as a friend.   The default value is none.
 */
export type LiffBotPrompt = "normal" | "aggressive" | "none";
