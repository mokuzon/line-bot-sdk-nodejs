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

/* tslint:disable:no-unused-locals */
import { GetMessageContentTranscodingResponse } from "../model/getMessageContentTranscodingResponse";

import * as Types from "../../types";
import { ensureJSON } from "../../utils";
import { Readable } from "stream";

import HTTPClient from "../../http";
import { AxiosResponse } from "axios";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

export class MessagingApiBlobClient {
  private httpClient: HTTPClient;

  constructor(config: httpClientConfig) {
    if (!config.baseURL) {
      config.baseURL = "https://api-data.line.me";
    }
    this.httpClient = new HTTPClient({
      defaultHeaders: {
        Authorization: "Bearer " + config.channelAccessToken,
      },
      responseParser: this.parseHTTPResponse.bind(this),
      baseURL: config.baseURL,
    });
  }

  private parseHTTPResponse(response: AxiosResponse) {
    const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
    let resBody = {
      ...response.data,
    };
    if (response.headers[LINE_REQUEST_ID_HTTP_HEADER_NAME]) {
      resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] =
        response.headers[LINE_REQUEST_ID_HTTP_HEADER_NAME];
    }
    return resBody;
  }

  /**
   * Download image, video, and audio data sent from users.
   * @param messageId Message ID of video or audio
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-content"> Documentation</a>
   */
  public async getMessageContent(messageId: string): Promise<Readable> {
    return this.httpClient.getStream(
      "/v2/bot/message/{messageId}/content".replace(
        "{" + "messageId" + "}",
        String(messageId),
      ),
    );
  }
  /**
   * Get a preview image of the image or video
   * @param messageId Message ID of image or video
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview"> Documentation</a>
   */
  public async getMessageContentPreview(messageId: string): Promise<Readable> {
    return this.httpClient.getStream(
      "/v2/bot/message/{messageId}/content/preview".replace(
        "{" + "messageId" + "}",
        String(messageId),
      ),
    );
  }
  /**
   * Verify the preparation status of a video or audio for getting
   * @param messageId Message ID of video or audio
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status"> Documentation</a>
   */
  public async getMessageContentTranscodingByMessageId(
    messageId: string,
  ): Promise<GetMessageContentTranscodingResponse> {
    const res = this.httpClient.get<GetMessageContentTranscodingResponse>(
      "/v2/bot/message/{messageId}/content/transcoding".replace(
        "{messageId}",
        String(messageId),
      ),
    );
    return ensureJSON(res);
  }
  /**
   * Download rich menu image.
   * @param richMenuId ID of the rich menu with the image to be downloaded
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image"> Documentation</a>
   */
  public async getRichMenuImage(richMenuId: string): Promise<Readable> {
    return this.httpClient.getStream(
      "/v2/bot/richmenu/{richMenuId}/content".replace(
        "{" + "richMenuId" + "}",
        String(richMenuId),
      ),
    );
  }
  /**
   * Upload rich menu image
   * @param richMenuId The ID of the rich menu to attach the image to
   * @param body
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image"> Documentation</a>
   */
  public async setRichMenuImage(
    richMenuId: string,
    body?: Blob,
  ): Promise<Types.MessageAPIResponseBase> {
    const params = body;

    const res = this.httpClient.postBinaryContent(
      "/v2/bot/richmenu/{richMenuId}/content".replace(
        "{richMenuId}",
        String(richMenuId),
      ),
      params,
    );
    return ensureJSON(res);
  }
}
