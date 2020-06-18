// tslint:disable
/**
 * Notes API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {number}
     * @memberof Note
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    text: string;
    /**
     * 
     * @type {number}
     * @memberof Note
     */
    themeId: number;
    /**
     * 
     * @type {Theme}
     * @memberof Note
     */
    theme: Theme;
    /**
     * 
     * @type {number}
     * @memberof Note
     */
    userId: number;
    /**
     * 
     * @type {User}
     * @memberof Note
     */
    user: User;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Note
     */
    tags: Array<Tag>;
}
/**
 * 
 * @export
 * @interface NotesFindAllDto
 */
export interface NotesFindAllDto {
    /**
     * 
     * @type {PaginationDto}
     * @memberof NotesFindAllDto
     */
    pagination?: PaginationDto;
}
/**
 * 
 * @export
 * @interface NotesFindAllRes
 */
export interface NotesFindAllRes {
    /**
     * 
     * @type {Array<Note>}
     * @memberof NotesFindAllRes
     */
    items: Array<Note>;
    /**
     * 
     * @type {number}
     * @memberof NotesFindAllRes
     */
    count?: number;
}
/**
 * 
 * @export
 * @interface PaginationDto
 */
export interface PaginationDto {
    /**
     * 
     * @type {number}
     * @memberof PaginationDto
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationDto
     */
    results?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PaginationDto
     */
    count: boolean;
}
/**
 * 
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {number}
     * @memberof Tag
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    name: string;
}
/**
 * 
 * @export
 * @interface Theme
 */
export interface Theme {
    /**
     * 
     * @type {number}
     * @memberof Theme
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    variant: ThemeVariant;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    fontFamily: string;
    /**
     * 
     * @type {number}
     * @memberof Theme
     */
    fontSize: number;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    background: string;
    /**
     * 
     * @type {string}
     * @memberof Theme
     */
    foreground: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ThemeVariant {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * 
     * @type {Array<Note>}
     * @memberof User
     */
    notes?: Array<Note>;
    /**
     * 
     * @type {UserDetails}
     * @memberof User
     */
    details: UserDetails;
}
/**
 * 
 * @export
 * @interface UserDetails
 */
export interface UserDetails {
    /**
     * 
     * @type {number}
     * @memberof UserDetails
     */
    age: number;
}
/**
 * 
 * @export
 * @interface UsersFindByNameDto
 */
export interface UsersFindByNameDto {
    /**
     * 
     * @type {string}
     * @memberof UsersFindByNameDto
     */
    name: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).appControllerGetHello(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<string> {
            return DefaultApiFp(configuration).appControllerGetHello(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: any) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

}


/**
 * NotesApi - axios parameter creator
 * @export
 */
export const NotesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/notes/create`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {NotesFindAllDto} notesFindAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (notesFindAllDto: NotesFindAllDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'notesFindAllDto' is not null or undefined
            if (notesFindAllDto === null || notesFindAllDto === undefined) {
                throw new RequiredError('notesFindAllDto','Required parameter notesFindAllDto was null or undefined when calling findAll.');
            }
            const localVarPath = `/api/notes/findAll`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof notesFindAllDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(notesFindAllDto !== undefined ? notesFindAllDto : {}) : (notesFindAllDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotesApi - functional programming interface
 * @export
 */
export const NotesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Note>> {
            const localVarAxiosArgs = await NotesApiAxiosParamCreator(configuration).create(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {NotesFindAllDto} notesFindAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(notesFindAllDto: NotesFindAllDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotesFindAllRes>> {
            const localVarAxiosArgs = await NotesApiAxiosParamCreator(configuration).findAll(notesFindAllDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * NotesApi - factory interface
 * @export
 */
export const NotesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(options?: any): AxiosPromise<Note> {
            return NotesApiFp(configuration).create(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {NotesFindAllDto} notesFindAllDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(notesFindAllDto: NotesFindAllDto, options?: any): AxiosPromise<NotesFindAllRes> {
            return NotesApiFp(configuration).findAll(notesFindAllDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NotesApi - object-oriented interface
 * @export
 * @class NotesApi
 * @extends {BaseAPI}
 */
export class NotesApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApi
     */
    public create(options?: any) {
        return NotesApiFp(this.configuration).create(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {NotesFindAllDto} notesFindAllDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotesApi
     */
    public findAll(notesFindAllDto: NotesFindAllDto, options?: any) {
        return NotesApiFp(this.configuration).findAll(notesFindAllDto, options).then((request) => request(this.axios, this.basePath));
    }

}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/findAll`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UsersFindByNameDto} usersFindByNameDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findByName: async (usersFindByNameDto: UsersFindByNameDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'usersFindByNameDto' is not null or undefined
            if (usersFindByNameDto === null || usersFindByNameDto === undefined) {
                throw new RequiredError('usersFindByNameDto','Required parameter usersFindByNameDto was null or undefined when calling findByName.');
            }
            const localVarPath = `/api/users/findByName`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof usersFindByNameDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(usersFindByNameDto !== undefined ? usersFindByNameDto : {}) : (usersFindByNameDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).findAll(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UsersFindByNameDto} usersFindByNameDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findByName(usersFindByNameDto: UsersFindByNameDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).findByName(usersFindByNameDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(options?: any): AxiosPromise<Array<User>> {
            return UsersApiFp(configuration).findAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersFindByNameDto} usersFindByNameDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findByName(usersFindByNameDto: UsersFindByNameDto, options?: any): AxiosPromise<User> {
            return UsersApiFp(configuration).findByName(usersFindByNameDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public findAll(options?: any) {
        return UsersApiFp(this.configuration).findAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersFindByNameDto} usersFindByNameDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public findByName(usersFindByNameDto: UsersFindByNameDto, options?: any) {
        return UsersApiFp(this.configuration).findByName(usersFindByNameDto, options).then((request) => request(this.axios, this.basePath));
    }

}


