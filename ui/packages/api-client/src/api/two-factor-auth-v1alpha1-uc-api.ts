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
import { PasswordRequest } from '../models';
// @ts-ignore
import { TotpAuthLinkResponse } from '../models';
// @ts-ignore
import { TotpRequest } from '../models';
// @ts-ignore
import { TwoFactorAuthSettings } from '../models';
/**
 * TwoFactorAuthV1alpha1UcApi - axios parameter creator
 * @export
 */
export const TwoFactorAuthV1alpha1UcApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Configure a TOTP
         * @param {TotpRequest} [totpRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurerTotp: async (totpRequest?: TotpRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(totpRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTotp: async (passwordRequest?: PasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp/-`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Disable Two-factor authentication
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disableTwoFactor: async (passwordRequest?: PasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings/disabled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Enable Two-factor authentication
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableTwoFactor: async (passwordRequest?: PasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings/enabled`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get TOTP auth link, including secret
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTotpAuthLink: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/totp/auth-link`;
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
         * Get Two-factor authentication settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTwoFactorAuthenticationSettings: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/uc.api.security.halo.run/v1alpha1/authentications/two-factor/settings`;
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
    }
};

/**
 * TwoFactorAuthV1alpha1UcApi - functional programming interface
 * @export
 */
export const TwoFactorAuthV1alpha1UcApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TwoFactorAuthV1alpha1UcApiAxiosParamCreator(configuration)
    return {
        /**
         * Configure a TOTP
         * @param {TotpRequest} [totpRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configurerTotp(totpRequest?: TotpRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TwoFactorAuthSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configurerTotp(totpRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.configurerTotp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTotp(passwordRequest?: PasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TwoFactorAuthSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTotp(passwordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.deleteTotp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Disable Two-factor authentication
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async disableTwoFactor(passwordRequest?: PasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TwoFactorAuthSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disableTwoFactor(passwordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.disableTwoFactor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Enable Two-factor authentication
         * @param {PasswordRequest} [passwordRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableTwoFactor(passwordRequest?: PasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TwoFactorAuthSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableTwoFactor(passwordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.enableTwoFactor']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get TOTP auth link, including secret
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTotpAuthLink(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TotpAuthLinkResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTotpAuthLink(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.getTotpAuthLink']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Two-factor authentication settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTwoFactorAuthenticationSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TwoFactorAuthSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTwoFactorAuthenticationSettings(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TwoFactorAuthV1alpha1UcApi.getTwoFactorAuthenticationSettings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TwoFactorAuthV1alpha1UcApi - factory interface
 * @export
 */
export const TwoFactorAuthV1alpha1UcApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TwoFactorAuthV1alpha1UcApiFp(configuration)
    return {
        /**
         * Configure a TOTP
         * @param {TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configurerTotp(requestParameters: TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TwoFactorAuthSettings> {
            return localVarFp.configurerTotp(requestParameters.totpRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {TwoFactorAuthV1alpha1UcApiDeleteTotpRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTotp(requestParameters: TwoFactorAuthV1alpha1UcApiDeleteTotpRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TwoFactorAuthSettings> {
            return localVarFp.deleteTotp(requestParameters.passwordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Disable Two-factor authentication
         * @param {TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disableTwoFactor(requestParameters: TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TwoFactorAuthSettings> {
            return localVarFp.disableTwoFactor(requestParameters.passwordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Enable Two-factor authentication
         * @param {TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableTwoFactor(requestParameters: TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TwoFactorAuthSettings> {
            return localVarFp.enableTwoFactor(requestParameters.passwordRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get TOTP auth link, including secret
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTotpAuthLink(options?: RawAxiosRequestConfig): AxiosPromise<TotpAuthLinkResponse> {
            return localVarFp.getTotpAuthLink(options).then((request) => request(axios, basePath));
        },
        /**
         * Get Two-factor authentication settings.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTwoFactorAuthenticationSettings(options?: RawAxiosRequestConfig): AxiosPromise<TwoFactorAuthSettings> {
            return localVarFp.getTwoFactorAuthenticationSettings(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for configurerTotp operation in TwoFactorAuthV1alpha1UcApi.
 * @export
 * @interface TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest
 */
export interface TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest {
    /**
     * 
     * @type {TotpRequest}
     * @memberof TwoFactorAuthV1alpha1UcApiConfigurerTotp
     */
    readonly totpRequest?: TotpRequest
}

/**
 * Request parameters for deleteTotp operation in TwoFactorAuthV1alpha1UcApi.
 * @export
 * @interface TwoFactorAuthV1alpha1UcApiDeleteTotpRequest
 */
export interface TwoFactorAuthV1alpha1UcApiDeleteTotpRequest {
    /**
     * 
     * @type {PasswordRequest}
     * @memberof TwoFactorAuthV1alpha1UcApiDeleteTotp
     */
    readonly passwordRequest?: PasswordRequest
}

/**
 * Request parameters for disableTwoFactor operation in TwoFactorAuthV1alpha1UcApi.
 * @export
 * @interface TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest
 */
export interface TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest {
    /**
     * 
     * @type {PasswordRequest}
     * @memberof TwoFactorAuthV1alpha1UcApiDisableTwoFactor
     */
    readonly passwordRequest?: PasswordRequest
}

/**
 * Request parameters for enableTwoFactor operation in TwoFactorAuthV1alpha1UcApi.
 * @export
 * @interface TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest
 */
export interface TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest {
    /**
     * 
     * @type {PasswordRequest}
     * @memberof TwoFactorAuthV1alpha1UcApiEnableTwoFactor
     */
    readonly passwordRequest?: PasswordRequest
}

/**
 * TwoFactorAuthV1alpha1UcApi - object-oriented interface
 * @export
 * @class TwoFactorAuthV1alpha1UcApi
 * @extends {BaseAPI}
 */
export class TwoFactorAuthV1alpha1UcApi extends BaseAPI {
    /**
     * Configure a TOTP
     * @param {TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public configurerTotp(requestParameters: TwoFactorAuthV1alpha1UcApiConfigurerTotpRequest = {}, options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).configurerTotp(requestParameters.totpRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {TwoFactorAuthV1alpha1UcApiDeleteTotpRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public deleteTotp(requestParameters: TwoFactorAuthV1alpha1UcApiDeleteTotpRequest = {}, options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).deleteTotp(requestParameters.passwordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Disable Two-factor authentication
     * @param {TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public disableTwoFactor(requestParameters: TwoFactorAuthV1alpha1UcApiDisableTwoFactorRequest = {}, options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).disableTwoFactor(requestParameters.passwordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Enable Two-factor authentication
     * @param {TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public enableTwoFactor(requestParameters: TwoFactorAuthV1alpha1UcApiEnableTwoFactorRequest = {}, options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).enableTwoFactor(requestParameters.passwordRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get TOTP auth link, including secret
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public getTotpAuthLink(options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).getTotpAuthLink(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Two-factor authentication settings.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoFactorAuthV1alpha1UcApi
     */
    public getTwoFactorAuthenticationSettings(options?: RawAxiosRequestConfig) {
        return TwoFactorAuthV1alpha1UcApiFp(this.configuration).getTwoFactorAuthenticationSettings(options).then((request) => request(this.axios, this.basePath));
    }
}
