/* tslint:disable */
/* eslint-disable */
/**
 * Configuration management
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddContributionRequest } from '../model';
// @ts-ignore
import { Contribution } from '../model';
// @ts-ignore
import { UpdateContributionRequest } from '../model';
/**
 * ContributionControllerApi - axios parameter creator
 * @export
 */
export const ContributionControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddContributionRequest} addContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addContribution: async (addContributionRequest: AddContributionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addContributionRequest' is not null or undefined
            assertParamExists('addContribution', 'addContributionRequest', addContributionRequest)
            const localVarPath = `/contribution/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(addContributionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContribution: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteContribution', 'id', id)
            const localVarPath = `/contribution/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContributionById: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getContributionById', 'id', id)
            const localVarPath = `/contribution/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContributionsByUserId: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getContributionsByUserId', 'userId', userId)
            const localVarPath = `/contribution/user/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateContributionRequest} updateContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContribution: async (updateContributionRequest: UpdateContributionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateContributionRequest' is not null or undefined
            assertParamExists('updateContribution', 'updateContributionRequest', updateContributionRequest)
            const localVarPath = `/contribution/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateContributionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContributionControllerApi - functional programming interface
 * @export
 */
export const ContributionControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContributionControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {AddContributionRequest} addContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addContribution(addContributionRequest: AddContributionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contribution>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addContribution(addContributionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteContribution(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteContribution(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContributionById(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contribution>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContributionById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getContributionsByUserId(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Contribution>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getContributionsByUserId(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {UpdateContributionRequest} updateContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateContribution(updateContributionRequest: UpdateContributionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Contribution>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateContribution(updateContributionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ContributionControllerApi - factory interface
 * @export
 */
export const ContributionControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContributionControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {AddContributionRequest} addContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addContribution(addContributionRequest: AddContributionRequest, options?: any): AxiosPromise<Contribution> {
            return localVarFp.addContribution(addContributionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteContribution(id: number, options?: any): AxiosPromise<string> {
            return localVarFp.deleteContribution(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContributionById(id: number, options?: any): AxiosPromise<Contribution> {
            return localVarFp.getContributionById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getContributionsByUserId(userId: number, options?: any): AxiosPromise<Array<Contribution>> {
            return localVarFp.getContributionsByUserId(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateContributionRequest} updateContributionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateContribution(updateContributionRequest: UpdateContributionRequest, options?: any): AxiosPromise<Contribution> {
            return localVarFp.updateContribution(updateContributionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addContribution operation in ContributionControllerApi.
 * @export
 * @interface ContributionControllerApiAddContributionRequest
 */
export interface ContributionControllerApiAddContributionRequest {
    /**
     * 
     * @type {AddContributionRequest}
     * @memberof ContributionControllerApiAddContribution
     */
    readonly addContributionRequest: AddContributionRequest
}

/**
 * Request parameters for deleteContribution operation in ContributionControllerApi.
 * @export
 * @interface ContributionControllerApiDeleteContributionRequest
 */
export interface ContributionControllerApiDeleteContributionRequest {
    /**
     * 
     * @type {number}
     * @memberof ContributionControllerApiDeleteContribution
     */
    readonly id: number
}

/**
 * Request parameters for getContributionById operation in ContributionControllerApi.
 * @export
 * @interface ContributionControllerApiGetContributionByIdRequest
 */
export interface ContributionControllerApiGetContributionByIdRequest {
    /**
     * 
     * @type {number}
     * @memberof ContributionControllerApiGetContributionById
     */
    readonly id: number
}

/**
 * Request parameters for getContributionsByUserId operation in ContributionControllerApi.
 * @export
 * @interface ContributionControllerApiGetContributionsByUserIdRequest
 */
export interface ContributionControllerApiGetContributionsByUserIdRequest {
    /**
     * 
     * @type {number}
     * @memberof ContributionControllerApiGetContributionsByUserId
     */
    readonly userId: number
}

/**
 * Request parameters for updateContribution operation in ContributionControllerApi.
 * @export
 * @interface ContributionControllerApiUpdateContributionRequest
 */
export interface ContributionControllerApiUpdateContributionRequest {
    /**
     * 
     * @type {UpdateContributionRequest}
     * @memberof ContributionControllerApiUpdateContribution
     */
    readonly updateContributionRequest: UpdateContributionRequest
}

/**
 * ContributionControllerApi - object-oriented interface
 * @export
 * @class ContributionControllerApi
 * @extends {BaseAPI}
 */
export class ContributionControllerApi extends BaseAPI {
    /**
     * 
     * @param {ContributionControllerApiAddContributionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributionControllerApi
     */
    public addContribution(requestParameters: ContributionControllerApiAddContributionRequest, options?: AxiosRequestConfig) {
        return ContributionControllerApiFp(this.configuration).addContribution(requestParameters.addContributionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ContributionControllerApiDeleteContributionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributionControllerApi
     */
    public deleteContribution(requestParameters: ContributionControllerApiDeleteContributionRequest, options?: AxiosRequestConfig) {
        return ContributionControllerApiFp(this.configuration).deleteContribution(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ContributionControllerApiGetContributionByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributionControllerApi
     */
    public getContributionById(requestParameters: ContributionControllerApiGetContributionByIdRequest, options?: AxiosRequestConfig) {
        return ContributionControllerApiFp(this.configuration).getContributionById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ContributionControllerApiGetContributionsByUserIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributionControllerApi
     */
    public getContributionsByUserId(requestParameters: ContributionControllerApiGetContributionsByUserIdRequest, options?: AxiosRequestConfig) {
        return ContributionControllerApiFp(this.configuration).getContributionsByUserId(requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ContributionControllerApiUpdateContributionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContributionControllerApi
     */
    public updateContribution(requestParameters: ContributionControllerApiUpdateContributionRequest, options?: AxiosRequestConfig) {
        return ContributionControllerApiFp(this.configuration).updateContribution(requestParameters.updateContributionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}