/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ListedSinglePageVoList } from '../models';
// @ts-ignore
import { SinglePageVo } from '../models';
/**
 * SinglePageV1alpha1PublicApi - axios parameter creator
 * @export
 */
export const SinglePageV1alpha1PublicApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets single page by name
         * @param {string} name SinglePage name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        querySinglePageByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('querySinglePageByName', 'name', name)
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/singlepages/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists single pages
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        querySinglePages: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/singlepages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SinglePageV1alpha1PublicApi - functional programming interface
 * @export
 */
export const SinglePageV1alpha1PublicApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SinglePageV1alpha1PublicApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets single page by name
         * @param {string} name SinglePage name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async querySinglePageByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePageVo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.querySinglePageByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1PublicApi.querySinglePageByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists single pages
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async querySinglePages(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedSinglePageVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.querySinglePages(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SinglePageV1alpha1PublicApi.querySinglePages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SinglePageV1alpha1PublicApi - factory interface
 * @export
 */
export const SinglePageV1alpha1PublicApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SinglePageV1alpha1PublicApiFp(configuration)
    return {
        /**
         * Gets single page by name
         * @param {SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        querySinglePageByName(requestParameters: SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<SinglePageVo> {
            return localVarFp.querySinglePageByName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists single pages
         * @param {SinglePageV1alpha1PublicApiQuerySinglePagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        querySinglePages(requestParameters: SinglePageV1alpha1PublicApiQuerySinglePagesRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ListedSinglePageVoList> {
            return localVarFp.querySinglePages(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for querySinglePageByName operation in SinglePageV1alpha1PublicApi.
 * @export
 * @interface SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest
 */
export interface SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest {
    /**
     * SinglePage name
     * @type {string}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePageByName
     */
    readonly name: string
}

/**
 * Request parameters for querySinglePages operation in SinglePageV1alpha1PublicApi.
 * @export
 * @interface SinglePageV1alpha1PublicApiQuerySinglePagesRequest
 */
export interface SinglePageV1alpha1PublicApiQuerySinglePagesRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePages
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePages
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePages
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePages
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof SinglePageV1alpha1PublicApiQuerySinglePages
     */
    readonly sort?: Array<string>
}

/**
 * SinglePageV1alpha1PublicApi - object-oriented interface
 * @export
 * @class SinglePageV1alpha1PublicApi
 * @extends {BaseAPI}
 */
export class SinglePageV1alpha1PublicApi extends BaseAPI {
    /**
     * Gets single page by name
     * @param {SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1PublicApi
     */
    public querySinglePageByName(requestParameters: SinglePageV1alpha1PublicApiQuerySinglePageByNameRequest, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1PublicApiFp(this.configuration).querySinglePageByName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists single pages
     * @param {SinglePageV1alpha1PublicApiQuerySinglePagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SinglePageV1alpha1PublicApi
     */
    public querySinglePages(requestParameters: SinglePageV1alpha1PublicApiQuerySinglePagesRequest = {}, options?: RawAxiosRequestConfig) {
        return SinglePageV1alpha1PublicApiFp(this.configuration).querySinglePages(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }
}
