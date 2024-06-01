/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
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
import { PersonalAccessToken } from '../models';
// @ts-ignore
import { PersonalAccessTokenList } from '../models';
/**
 * SecurityHaloRunV1alpha1PersonalAccessTokenApi - axios parameter creator
 * @export
 */
export const SecurityHaloRunV1alpha1PersonalAccessTokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create security.halo.run/v1alpha1/PersonalAccessToken
         * @param {PersonalAccessToken} [personalAccessToken] Fresh personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSecurityHaloRunV1alpha1PersonalAccessToken: async (personalAccessToken?: PersonalAccessToken, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/security.halo.run/v1alpha1/personalaccesstokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(personalAccessToken, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSecurityHaloRunV1alpha1PersonalAccessToken: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteSecurityHaloRunV1alpha1PersonalAccessToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
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
         * Get security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSecurityHaloRunV1alpha1PersonalAccessToken: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getSecurityHaloRunV1alpha1PersonalAccessToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}`
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

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
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
         * List security.halo.run/v1alpha1/PersonalAccessToken
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSecurityHaloRunV1alpha1PersonalAccessToken: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/security.halo.run/v1alpha1/personalaccesstokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
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
        /**
         * Update security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {PersonalAccessToken} [personalAccessToken] Updated personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSecurityHaloRunV1alpha1PersonalAccessToken: async (name: string, personalAccessToken?: PersonalAccessToken, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateSecurityHaloRunV1alpha1PersonalAccessToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/personalaccesstokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(personalAccessToken, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityHaloRunV1alpha1PersonalAccessTokenApi - functional programming interface
 * @export
 */
export const SecurityHaloRunV1alpha1PersonalAccessTokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecurityHaloRunV1alpha1PersonalAccessTokenApiAxiosParamCreator(configuration)
    return {
        /**
         * Create security.halo.run/v1alpha1/PersonalAccessToken
         * @param {PersonalAccessToken} [personalAccessToken] Fresh personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSecurityHaloRunV1alpha1PersonalAccessToken(personalAccessToken?: PersonalAccessToken, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonalAccessToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSecurityHaloRunV1alpha1PersonalAccessToken(personalAccessToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityHaloRunV1alpha1PersonalAccessTokenApi.createSecurityHaloRunV1alpha1PersonalAccessToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSecurityHaloRunV1alpha1PersonalAccessToken(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSecurityHaloRunV1alpha1PersonalAccessToken(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityHaloRunV1alpha1PersonalAccessTokenApi.deleteSecurityHaloRunV1alpha1PersonalAccessToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSecurityHaloRunV1alpha1PersonalAccessToken(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonalAccessToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSecurityHaloRunV1alpha1PersonalAccessToken(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityHaloRunV1alpha1PersonalAccessTokenApi.getSecurityHaloRunV1alpha1PersonalAccessToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List security.halo.run/v1alpha1/PersonalAccessToken
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSecurityHaloRunV1alpha1PersonalAccessToken(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonalAccessTokenList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSecurityHaloRunV1alpha1PersonalAccessToken(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityHaloRunV1alpha1PersonalAccessTokenApi.listSecurityHaloRunV1alpha1PersonalAccessToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update security.halo.run/v1alpha1/PersonalAccessToken
         * @param {string} name Name of personalaccesstoken
         * @param {PersonalAccessToken} [personalAccessToken] Updated personalaccesstoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSecurityHaloRunV1alpha1PersonalAccessToken(name: string, personalAccessToken?: PersonalAccessToken, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonalAccessToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSecurityHaloRunV1alpha1PersonalAccessToken(name, personalAccessToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SecurityHaloRunV1alpha1PersonalAccessTokenApi.updateSecurityHaloRunV1alpha1PersonalAccessToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SecurityHaloRunV1alpha1PersonalAccessTokenApi - factory interface
 * @export
 */
export const SecurityHaloRunV1alpha1PersonalAccessTokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(configuration)
    return {
        /**
         * Create security.halo.run/v1alpha1/PersonalAccessToken
         * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PersonalAccessToken> {
            return localVarFp.createSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.personalAccessToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete security.halo.run/v1alpha1/PersonalAccessToken
         * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get security.halo.run/v1alpha1/PersonalAccessToken
         * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<PersonalAccessToken> {
            return localVarFp.getSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List security.halo.run/v1alpha1/PersonalAccessToken
         * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PersonalAccessTokenList> {
            return localVarFp.listSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update security.halo.run/v1alpha1/PersonalAccessToken
         * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<PersonalAccessToken> {
            return localVarFp.updateSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, requestParameters.personalAccessToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSecurityHaloRunV1alpha1PersonalAccessToken operation in SecurityHaloRunV1alpha1PersonalAccessTokenApi.
 * @export
 * @interface SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest
 */
export interface SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest {
    /**
     * Fresh personalaccesstoken
     * @type {PersonalAccessToken}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly personalAccessToken?: PersonalAccessToken
}

/**
 * Request parameters for deleteSecurityHaloRunV1alpha1PersonalAccessToken operation in SecurityHaloRunV1alpha1PersonalAccessTokenApi.
 * @export
 * @interface SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest
 */
export interface SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest {
    /**
     * Name of personalaccesstoken
     * @type {string}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly name: string
}

/**
 * Request parameters for getSecurityHaloRunV1alpha1PersonalAccessToken operation in SecurityHaloRunV1alpha1PersonalAccessTokenApi.
 * @export
 * @interface SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest
 */
export interface SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest {
    /**
     * Name of personalaccesstoken
     * @type {string}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly name: string
}

/**
 * Request parameters for listSecurityHaloRunV1alpha1PersonalAccessToken operation in SecurityHaloRunV1alpha1PersonalAccessTokenApi.
 * @export
 * @interface SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest
 */
export interface SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updateSecurityHaloRunV1alpha1PersonalAccessToken operation in SecurityHaloRunV1alpha1PersonalAccessTokenApi.
 * @export
 * @interface SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest
 */
export interface SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest {
    /**
     * Name of personalaccesstoken
     * @type {string}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly name: string

    /**
     * Updated personalaccesstoken
     * @type {PersonalAccessToken}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessToken
     */
    readonly personalAccessToken?: PersonalAccessToken
}

/**
 * SecurityHaloRunV1alpha1PersonalAccessTokenApi - object-oriented interface
 * @export
 * @class SecurityHaloRunV1alpha1PersonalAccessTokenApi
 * @extends {BaseAPI}
 */
export class SecurityHaloRunV1alpha1PersonalAccessTokenApi extends BaseAPI {
    /**
     * Create security.halo.run/v1alpha1/PersonalAccessToken
     * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApi
     */
    public createSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiCreateSecurityHaloRunV1alpha1PersonalAccessTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(this.configuration).createSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.personalAccessToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete security.halo.run/v1alpha1/PersonalAccessToken
     * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApi
     */
    public deleteSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiDeleteSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig) {
        return SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(this.configuration).deleteSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get security.halo.run/v1alpha1/PersonalAccessToken
     * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApi
     */
    public getSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiGetSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig) {
        return SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(this.configuration).getSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List security.halo.run/v1alpha1/PersonalAccessToken
     * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApi
     */
    public listSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiListSecurityHaloRunV1alpha1PersonalAccessTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(this.configuration).listSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update security.halo.run/v1alpha1/PersonalAccessToken
     * @param {SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityHaloRunV1alpha1PersonalAccessTokenApi
     */
    public updateSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters: SecurityHaloRunV1alpha1PersonalAccessTokenApiUpdateSecurityHaloRunV1alpha1PersonalAccessTokenRequest, options?: RawAxiosRequestConfig) {
        return SecurityHaloRunV1alpha1PersonalAccessTokenApiFp(this.configuration).updateSecurityHaloRunV1alpha1PersonalAccessToken(requestParameters.name, requestParameters.personalAccessToken, options).then((request) => request(this.axios, this.basePath));
    }
}

