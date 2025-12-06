
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMembership
 * 
 */
export type OrganizationMembership = $Result.DefaultSelection<Prisma.$OrganizationMembershipPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model AdSlot
 * 
 */
export type AdSlot = $Result.DefaultSelection<Prisma.$AdSlotPayload>
/**
 * Model CompanionSlot
 * 
 */
export type CompanionSlot = $Result.DefaultSelection<Prisma.$CompanionSlotPayload>
/**
 * Model Advertiser
 * 
 */
export type Advertiser = $Result.DefaultSelection<Prisma.$AdvertiserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model AdGroup
 * 
 */
export type AdGroup = $Result.DefaultSelection<Prisma.$AdGroupPayload>
/**
 * Model Ad
 * 
 */
export type Ad = $Result.DefaultSelection<Prisma.$AdPayload>
/**
 * Model CompanionBanner
 * 
 */
export type CompanionBanner = $Result.DefaultSelection<Prisma.$CompanionBannerPayload>
/**
 * Model Click
 * 
 */
export type Click = $Result.DefaultSelection<Prisma.$ClickPayload>
/**
 * Model AdEvent
 * 
 */
export type AdEvent = $Result.DefaultSelection<Prisma.$AdEventPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMembership`: Exposes CRUD operations for the **OrganizationMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMemberships
    * const organizationMemberships = await prisma.organizationMembership.findMany()
    * ```
    */
  get organizationMembership(): Prisma.OrganizationMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adSlot`: Exposes CRUD operations for the **AdSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdSlots
    * const adSlots = await prisma.adSlot.findMany()
    * ```
    */
  get adSlot(): Prisma.AdSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companionSlot`: Exposes CRUD operations for the **CompanionSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanionSlots
    * const companionSlots = await prisma.companionSlot.findMany()
    * ```
    */
  get companionSlot(): Prisma.CompanionSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertiser`: Exposes CRUD operations for the **Advertiser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisers
    * const advertisers = await prisma.advertiser.findMany()
    * ```
    */
  get advertiser(): Prisma.AdvertiserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adGroup`: Exposes CRUD operations for the **AdGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdGroups
    * const adGroups = await prisma.adGroup.findMany()
    * ```
    */
  get adGroup(): Prisma.AdGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **Ad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ads
    * const ads = await prisma.ad.findMany()
    * ```
    */
  get ad(): Prisma.AdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companionBanner`: Exposes CRUD operations for the **CompanionBanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanionBanners
    * const companionBanners = await prisma.companionBanner.findMany()
    * ```
    */
  get companionBanner(): Prisma.CompanionBannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.click`: Exposes CRUD operations for the **Click** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clicks
    * const clicks = await prisma.click.findMany()
    * ```
    */
  get click(): Prisma.ClickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adEvent`: Exposes CRUD operations for the **AdEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdEvents
    * const adEvents = await prisma.adEvent.findMany()
    * ```
    */
  get adEvent(): Prisma.AdEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Organization: 'Organization',
    OrganizationMembership: 'OrganizationMembership',
    Media: 'Media',
    AdSlot: 'AdSlot',
    CompanionSlot: 'CompanionSlot',
    Advertiser: 'Advertiser',
    Campaign: 'Campaign',
    AdGroup: 'AdGroup',
    Ad: 'Ad',
    CompanionBanner: 'CompanionBanner',
    Click: 'Click',
    AdEvent: 'AdEvent',
    DailyReport: 'DailyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "organization" | "organizationMembership" | "media" | "adSlot" | "companionSlot" | "advertiser" | "campaign" | "adGroup" | "ad" | "companionBanner" | "click" | "adEvent" | "dailyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMembership: {
        payload: Prisma.$OrganizationMembershipPayload<ExtArgs>
        fields: Prisma.OrganizationMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          findMany: {
            args: Prisma.OrganizationMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          create: {
            args: Prisma.OrganizationMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          createMany: {
            args: Prisma.OrganizationMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          update: {
            args: Prisma.OrganizationMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMembershipPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMembership>
          }
          groupBy: {
            args: Prisma.OrganizationMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMembershipCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      AdSlot: {
        payload: Prisma.$AdSlotPayload<ExtArgs>
        fields: Prisma.AdSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          findFirst: {
            args: Prisma.AdSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          findMany: {
            args: Prisma.AdSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>[]
          }
          create: {
            args: Prisma.AdSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          createMany: {
            args: Prisma.AdSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>[]
          }
          delete: {
            args: Prisma.AdSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          update: {
            args: Prisma.AdSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          deleteMany: {
            args: Prisma.AdSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>[]
          }
          upsert: {
            args: Prisma.AdSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdSlotPayload>
          }
          aggregate: {
            args: Prisma.AdSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdSlot>
          }
          groupBy: {
            args: Prisma.AdSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdSlotCountArgs<ExtArgs>
            result: $Utils.Optional<AdSlotCountAggregateOutputType> | number
          }
        }
      }
      CompanionSlot: {
        payload: Prisma.$CompanionSlotPayload<ExtArgs>
        fields: Prisma.CompanionSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          findFirst: {
            args: Prisma.CompanionSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          findMany: {
            args: Prisma.CompanionSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>[]
          }
          create: {
            args: Prisma.CompanionSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          createMany: {
            args: Prisma.CompanionSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanionSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>[]
          }
          delete: {
            args: Prisma.CompanionSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          update: {
            args: Prisma.CompanionSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          deleteMany: {
            args: Prisma.CompanionSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanionSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>[]
          }
          upsert: {
            args: Prisma.CompanionSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionSlotPayload>
          }
          aggregate: {
            args: Prisma.CompanionSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanionSlot>
          }
          groupBy: {
            args: Prisma.CompanionSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionSlotCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionSlotCountAggregateOutputType> | number
          }
        }
      }
      Advertiser: {
        payload: Prisma.$AdvertiserPayload<ExtArgs>
        fields: Prisma.AdvertiserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertiserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertiserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findFirst: {
            args: Prisma.AdvertiserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertiserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findMany: {
            args: Prisma.AdvertiserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          create: {
            args: Prisma.AdvertiserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          createMany: {
            args: Prisma.AdvertiserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertiserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          delete: {
            args: Prisma.AdvertiserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          update: {
            args: Prisma.AdvertiserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          deleteMany: {
            args: Prisma.AdvertiserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertiserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertiserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          upsert: {
            args: Prisma.AdvertiserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          aggregate: {
            args: Prisma.AdvertiserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertiser>
          }
          groupBy: {
            args: Prisma.AdvertiserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertiserCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      AdGroup: {
        payload: Prisma.$AdGroupPayload<ExtArgs>
        fields: Prisma.AdGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          findFirst: {
            args: Prisma.AdGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          findMany: {
            args: Prisma.AdGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>[]
          }
          create: {
            args: Prisma.AdGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          createMany: {
            args: Prisma.AdGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>[]
          }
          delete: {
            args: Prisma.AdGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          update: {
            args: Prisma.AdGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          deleteMany: {
            args: Prisma.AdGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>[]
          }
          upsert: {
            args: Prisma.AdGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          aggregate: {
            args: Prisma.AdGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdGroup>
          }
          groupBy: {
            args: Prisma.AdGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdGroupCountArgs<ExtArgs>
            result: $Utils.Optional<AdGroupCountAggregateOutputType> | number
          }
        }
      }
      Ad: {
        payload: Prisma.$AdPayload<ExtArgs>
        fields: Prisma.AdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findFirst: {
            args: Prisma.AdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          findMany: {
            args: Prisma.AdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          create: {
            args: Prisma.AdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          createMany: {
            args: Prisma.AdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          delete: {
            args: Prisma.AdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          update: {
            args: Prisma.AdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          deleteMany: {
            args: Prisma.AdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[]
          }
          upsert: {
            args: Prisma.AdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPayload>
          }
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAd>
          }
          groupBy: {
            args: Prisma.AdGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdCountArgs<ExtArgs>
            result: $Utils.Optional<AdCountAggregateOutputType> | number
          }
        }
      }
      CompanionBanner: {
        payload: Prisma.$CompanionBannerPayload<ExtArgs>
        fields: Prisma.CompanionBannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionBannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionBannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          findFirst: {
            args: Prisma.CompanionBannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionBannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          findMany: {
            args: Prisma.CompanionBannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>[]
          }
          create: {
            args: Prisma.CompanionBannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          createMany: {
            args: Prisma.CompanionBannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanionBannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>[]
          }
          delete: {
            args: Prisma.CompanionBannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          update: {
            args: Prisma.CompanionBannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          deleteMany: {
            args: Prisma.CompanionBannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionBannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanionBannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>[]
          }
          upsert: {
            args: Prisma.CompanionBannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionBannerPayload>
          }
          aggregate: {
            args: Prisma.CompanionBannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanionBanner>
          }
          groupBy: {
            args: Prisma.CompanionBannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionBannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionBannerCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionBannerCountAggregateOutputType> | number
          }
        }
      }
      Click: {
        payload: Prisma.$ClickPayload<ExtArgs>
        fields: Prisma.ClickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          findFirst: {
            args: Prisma.ClickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          findMany: {
            args: Prisma.ClickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>[]
          }
          create: {
            args: Prisma.ClickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          createMany: {
            args: Prisma.ClickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>[]
          }
          delete: {
            args: Prisma.ClickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          update: {
            args: Prisma.ClickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          deleteMany: {
            args: Prisma.ClickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>[]
          }
          upsert: {
            args: Prisma.ClickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickPayload>
          }
          aggregate: {
            args: Prisma.ClickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClick>
          }
          groupBy: {
            args: Prisma.ClickGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClickGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClickCountArgs<ExtArgs>
            result: $Utils.Optional<ClickCountAggregateOutputType> | number
          }
        }
      }
      AdEvent: {
        payload: Prisma.$AdEventPayload<ExtArgs>
        fields: Prisma.AdEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          findFirst: {
            args: Prisma.AdEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          findMany: {
            args: Prisma.AdEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>[]
          }
          create: {
            args: Prisma.AdEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          createMany: {
            args: Prisma.AdEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>[]
          }
          delete: {
            args: Prisma.AdEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          update: {
            args: Prisma.AdEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          deleteMany: {
            args: Prisma.AdEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>[]
          }
          upsert: {
            args: Prisma.AdEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdEventPayload>
          }
          aggregate: {
            args: Prisma.AdEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdEvent>
          }
          groupBy: {
            args: Prisma.AdEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdEventCountArgs<ExtArgs>
            result: $Utils.Optional<AdEventCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    organization?: OrganizationOmit
    organizationMembership?: OrganizationMembershipOmit
    media?: MediaOmit
    adSlot?: AdSlotOmit
    companionSlot?: CompanionSlotOmit
    advertiser?: AdvertiserOmit
    campaign?: CampaignOmit
    adGroup?: AdGroupOmit
    ad?: AdOmit
    companionBanner?: CompanionBannerOmit
    click?: ClickOmit
    adEvent?: AdEventOmit
    dailyReport?: DailyReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    membership: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | UserCountOutputTypeCountMembershipArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    membership: number
    advertisers: number
    media: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | OrganizationCountOutputTypeCountMembershipArgs
    advertisers?: boolean | OrganizationCountOutputTypeCountAdvertisersArgs
    media?: boolean | OrganizationCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAdvertisersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertiserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    adSlots: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adSlots?: boolean | MediaCountOutputTypeCountAdSlotsArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountAdSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdSlotWhereInput
  }


  /**
   * Count Type AdSlotCountOutputType
   */

  export type AdSlotCountOutputType = {
    companionSlots: number
  }

  export type AdSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionSlots?: boolean | AdSlotCountOutputTypeCountCompanionSlotsArgs
  }

  // Custom InputTypes
  /**
   * AdSlotCountOutputType without action
   */
  export type AdSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlotCountOutputType
     */
    select?: AdSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdSlotCountOutputType without action
   */
  export type AdSlotCountOutputTypeCountCompanionSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionSlotWhereInput
  }


  /**
   * Count Type AdvertiserCountOutputType
   */

  export type AdvertiserCountOutputType = {
    campaigns: number
    adGroups: number
    ads: number
  }

  export type AdvertiserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | AdvertiserCountOutputTypeCountCampaignsArgs
    adGroups?: boolean | AdvertiserCountOutputTypeCountAdGroupsArgs
    ads?: boolean | AdvertiserCountOutputTypeCountAdsArgs
  }

  // Custom InputTypes
  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiserCountOutputType
     */
    select?: AdvertiserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeCountAdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdGroupWhereInput
  }

  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    adGroups: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroups?: boolean | CampaignCountOutputTypeCountAdGroupsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountAdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdGroupWhereInput
  }


  /**
   * Count Type AdGroupCountOutputType
   */

  export type AdGroupCountOutputType = {
    ads: number
  }

  export type AdGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | AdGroupCountOutputTypeCountAdsArgs
  }

  // Custom InputTypes
  /**
   * AdGroupCountOutputType without action
   */
  export type AdGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroupCountOutputType
     */
    select?: AdGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdGroupCountOutputType without action
   */
  export type AdGroupCountOutputTypeCountAdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
  }


  /**
   * Count Type AdCountOutputType
   */

  export type AdCountOutputType = {
    companionBanners: number
  }

  export type AdCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionBanners?: boolean | AdCountOutputTypeCountCompanionBannersArgs
  }

  // Custom InputTypes
  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCountOutputType
     */
    select?: AdCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdCountOutputType without action
   */
  export type AdCountOutputTypeCountCompanionBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionBannerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    membership?: boolean | User$membershipArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | User$membershipArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      membership: Prisma.$OrganizationMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membership<T extends User$membershipArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.membership
   */
  export type User$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    cursor?: OrganizationMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    membership?: boolean | Organization$membershipArgs<ExtArgs>
    advertisers?: boolean | Organization$advertisersArgs<ExtArgs>
    media?: boolean | Organization$mediaArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | Organization$membershipArgs<ExtArgs>
    advertisers?: boolean | Organization$advertisersArgs<ExtArgs>
    media?: boolean | Organization$mediaArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      membership: Prisma.$OrganizationMembershipPayload<ExtArgs>[]
      advertisers: Prisma.$AdvertiserPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membership<T extends Organization$membershipArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membershipArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advertisers<T extends Organization$advertisersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$advertisersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Organization$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Organization$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.membership
   */
  export type Organization$membershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    cursor?: OrganizationMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * Organization.advertisers
   */
  export type Organization$advertisersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    where?: AdvertiserWhereInput
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    cursor?: AdvertiserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Organization.media
   */
  export type Organization$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMembership
   */

  export type AggregateOrganizationMembership = {
    _count: OrganizationMembershipCountAggregateOutputType | null
    _min: OrganizationMembershipMinAggregateOutputType | null
    _max: OrganizationMembershipMaxAggregateOutputType | null
  }

  export type OrganizationMembershipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembershipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: string | null
    permissions: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMembershipCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    role: number
    permissions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMembershipMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembershipMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMembershipCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembership to aggregate.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMemberships
    **/
    _count?: true | OrganizationMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMembershipMaxAggregateInputType
  }

  export type GetOrganizationMembershipAggregateType<T extends OrganizationMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMembership[P]>
      : GetScalarType<T[P], AggregateOrganizationMembership[P]>
  }




  export type OrganizationMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMembershipWhereInput
    orderBy?: OrganizationMembershipOrderByWithAggregationInput | OrganizationMembershipOrderByWithAggregationInput[]
    by: OrganizationMembershipScalarFieldEnum[] | OrganizationMembershipScalarFieldEnum
    having?: OrganizationMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMembershipCountAggregateInputType | true
    _min?: OrganizationMembershipMinAggregateInputType
    _max?: OrganizationMembershipMaxAggregateInputType
  }

  export type OrganizationMembershipGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    role: string
    permissions: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationMembershipCountAggregateOutputType | null
    _min: OrganizationMembershipMinAggregateOutputType | null
    _max: OrganizationMembershipMaxAggregateOutputType | null
  }

  type GetOrganizationMembershipGroupByPayload<T extends OrganizationMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMembershipGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMembership"]>

  export type OrganizationMembershipSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "role" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationMembership"]>
  export type OrganizationMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMembership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      role: string
      permissions: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationMembership"]>
    composites: {}
  }

  type OrganizationMembershipGetPayload<S extends boolean | null | undefined | OrganizationMembershipDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMembershipPayload, S>

  type OrganizationMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMembershipCountAggregateInputType | true
    }

  export interface OrganizationMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMembership'], meta: { name: 'OrganizationMembership' } }
    /**
     * Find zero or one OrganizationMembership that matches the filter.
     * @param {OrganizationMembershipFindUniqueArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMembershipFindUniqueArgs>(args: SelectSubset<T, OrganizationMembershipFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMembershipFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindFirstArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMembershipFindFirstArgs>(args?: SelectSubset<T, OrganizationMembershipFindFirstArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindFirstOrThrowArgs} args - Arguments to find a OrganizationMembership
     * @example
     * // Get one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMemberships
     * const organizationMemberships = await prisma.organizationMembership.findMany()
     * 
     * // Get first 10 OrganizationMemberships
     * const organizationMemberships = await prisma.organizationMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMembershipFindManyArgs>(args?: SelectSubset<T, OrganizationMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMembership.
     * @param {OrganizationMembershipCreateArgs} args - Arguments to create a OrganizationMembership.
     * @example
     * // Create one OrganizationMembership
     * const OrganizationMembership = await prisma.organizationMembership.create({
     *   data: {
     *     // ... data to create a OrganizationMembership
     *   }
     * })
     * 
     */
    create<T extends OrganizationMembershipCreateArgs>(args: SelectSubset<T, OrganizationMembershipCreateArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMemberships.
     * @param {OrganizationMembershipCreateManyArgs} args - Arguments to create many OrganizationMemberships.
     * @example
     * // Create many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMembershipCreateManyArgs>(args?: SelectSubset<T, OrganizationMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMemberships and returns the data saved in the database.
     * @param {OrganizationMembershipCreateManyAndReturnArgs} args - Arguments to create many OrganizationMemberships.
     * @example
     * // Create many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMemberships and only return the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMembership.
     * @param {OrganizationMembershipDeleteArgs} args - Arguments to delete one OrganizationMembership.
     * @example
     * // Delete one OrganizationMembership
     * const OrganizationMembership = await prisma.organizationMembership.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMembership
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMembershipDeleteArgs>(args: SelectSubset<T, OrganizationMembershipDeleteArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMembership.
     * @param {OrganizationMembershipUpdateArgs} args - Arguments to update one OrganizationMembership.
     * @example
     * // Update one OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMembershipUpdateArgs>(args: SelectSubset<T, OrganizationMembershipUpdateArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMemberships.
     * @param {OrganizationMembershipDeleteManyArgs} args - Arguments to filter OrganizationMemberships to delete.
     * @example
     * // Delete a few OrganizationMemberships
     * const { count } = await prisma.organizationMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMembershipDeleteManyArgs>(args?: SelectSubset<T, OrganizationMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMembershipUpdateManyArgs>(args: SelectSubset<T, OrganizationMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMemberships and returns the data updated in the database.
     * @param {OrganizationMembershipUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMemberships.
     * @example
     * // Update many OrganizationMemberships
     * const organizationMembership = await prisma.organizationMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMemberships and only return the `id`
     * const organizationMembershipWithIdOnly = await prisma.organizationMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMembership.
     * @param {OrganizationMembershipUpsertArgs} args - Arguments to update or create a OrganizationMembership.
     * @example
     * // Update or create a OrganizationMembership
     * const organizationMembership = await prisma.organizationMembership.upsert({
     *   create: {
     *     // ... data to create a OrganizationMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMembership we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMembershipUpsertArgs>(args: SelectSubset<T, OrganizationMembershipUpsertArgs<ExtArgs>>): Prisma__OrganizationMembershipClient<$Result.GetResult<Prisma.$OrganizationMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipCountArgs} args - Arguments to filter OrganizationMemberships to count.
     * @example
     * // Count the number of OrganizationMemberships
     * const count = await prisma.organizationMembership.count({
     *   where: {
     *     // ... the filter for the OrganizationMemberships we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMembershipCountArgs>(
      args?: Subset<T, OrganizationMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMembershipAggregateArgs>(args: Subset<T, OrganizationMembershipAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMembershipAggregateType<T>>

    /**
     * Group by OrganizationMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMembershipGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMembership model
   */
  readonly fields: OrganizationMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMembership model
   */
  interface OrganizationMembershipFieldRefs {
    readonly id: FieldRef<"OrganizationMembership", 'String'>
    readonly userId: FieldRef<"OrganizationMembership", 'String'>
    readonly organizationId: FieldRef<"OrganizationMembership", 'String'>
    readonly role: FieldRef<"OrganizationMembership", 'String'>
    readonly permissions: FieldRef<"OrganizationMembership", 'String'>
    readonly createdAt: FieldRef<"OrganizationMembership", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMembership findUnique
   */
  export type OrganizationMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership findUniqueOrThrow
   */
  export type OrganizationMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership findFirst
   */
  export type OrganizationMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMemberships.
     */
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership findFirstOrThrow
   */
  export type OrganizationMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembership to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMemberships.
     */
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership findMany
   */
  export type OrganizationMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMemberships to fetch.
     */
    where?: OrganizationMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMemberships to fetch.
     */
    orderBy?: OrganizationMembershipOrderByWithRelationInput | OrganizationMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMemberships.
     */
    cursor?: OrganizationMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMemberships.
     */
    skip?: number
    distinct?: OrganizationMembershipScalarFieldEnum | OrganizationMembershipScalarFieldEnum[]
  }

  /**
   * OrganizationMembership create
   */
  export type OrganizationMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMembership.
     */
    data: XOR<OrganizationMembershipCreateInput, OrganizationMembershipUncheckedCreateInput>
  }

  /**
   * OrganizationMembership createMany
   */
  export type OrganizationMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMemberships.
     */
    data: OrganizationMembershipCreateManyInput | OrganizationMembershipCreateManyInput[]
  }

  /**
   * OrganizationMembership createManyAndReturn
   */
  export type OrganizationMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMemberships.
     */
    data: OrganizationMembershipCreateManyInput | OrganizationMembershipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMembership update
   */
  export type OrganizationMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMembership.
     */
    data: XOR<OrganizationMembershipUpdateInput, OrganizationMembershipUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMembership to update.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership updateMany
   */
  export type OrganizationMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMemberships.
     */
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMemberships to update
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to update.
     */
    limit?: number
  }

  /**
   * OrganizationMembership updateManyAndReturn
   */
  export type OrganizationMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMemberships.
     */
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMemberships to update
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMembership upsert
   */
  export type OrganizationMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMembership to update in case it exists.
     */
    where: OrganizationMembershipWhereUniqueInput
    /**
     * In case the OrganizationMembership found by the `where` argument doesn't exist, create a new OrganizationMembership with this data.
     */
    create: XOR<OrganizationMembershipCreateInput, OrganizationMembershipUncheckedCreateInput>
    /**
     * In case the OrganizationMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMembershipUpdateInput, OrganizationMembershipUncheckedUpdateInput>
  }

  /**
   * OrganizationMembership delete
   */
  export type OrganizationMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMembership to delete.
     */
    where: OrganizationMembershipWhereUniqueInput
  }

  /**
   * OrganizationMembership deleteMany
   */
  export type OrganizationMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMemberships to delete
     */
    where?: OrganizationMembershipWhereInput
    /**
     * Limit how many OrganizationMemberships to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMembership without action
   */
  export type OrganizationMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMembership
     */
    select?: OrganizationMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMembership
     */
    omit?: OrganizationMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMembershipInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    name: string | null
    categories: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categories: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    name: number
    categories: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    name: string
    categories: string | null
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adSlots?: boolean | Media$adSlotsArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    name?: boolean
    categories?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categories" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adSlots?: boolean | Media$adSlotsArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      adSlots: Prisma.$AdSlotPayload<ExtArgs>[]
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categories: string | null
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adSlots<T extends Media$adSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Media$adSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly name: FieldRef<"Media", 'String'>
    readonly categories: FieldRef<"Media", 'String'>
    readonly organizationId: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.adSlots
   */
  export type Media$adSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    where?: AdSlotWhereInput
    orderBy?: AdSlotOrderByWithRelationInput | AdSlotOrderByWithRelationInput[]
    cursor?: AdSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdSlotScalarFieldEnum | AdSlotScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model AdSlot
   */

  export type AggregateAdSlot = {
    _count: AdSlotCountAggregateOutputType | null
    _min: AdSlotMinAggregateOutputType | null
    _max: AdSlotMaxAggregateOutputType | null
  }

  export type AdSlotMinAggregateOutputType = {
    id: string | null
    name: string | null
    mediaId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdSlotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mediaId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdSlotCountAggregateOutputType = {
    id: number
    name: number
    mediaId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdSlotMinAggregateInputType = {
    id?: true
    name?: true
    mediaId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdSlotMaxAggregateInputType = {
    id?: true
    name?: true
    mediaId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdSlotCountAggregateInputType = {
    id?: true
    name?: true
    mediaId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdSlot to aggregate.
     */
    where?: AdSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdSlots to fetch.
     */
    orderBy?: AdSlotOrderByWithRelationInput | AdSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdSlots
    **/
    _count?: true | AdSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdSlotMaxAggregateInputType
  }

  export type GetAdSlotAggregateType<T extends AdSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAdSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdSlot[P]>
      : GetScalarType<T[P], AggregateAdSlot[P]>
  }




  export type AdSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdSlotWhereInput
    orderBy?: AdSlotOrderByWithAggregationInput | AdSlotOrderByWithAggregationInput[]
    by: AdSlotScalarFieldEnum[] | AdSlotScalarFieldEnum
    having?: AdSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdSlotCountAggregateInputType | true
    _min?: AdSlotMinAggregateInputType
    _max?: AdSlotMaxAggregateInputType
  }

  export type AdSlotGroupByOutputType = {
    id: string
    name: string
    mediaId: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: AdSlotCountAggregateOutputType | null
    _min: AdSlotMinAggregateOutputType | null
    _max: AdSlotMaxAggregateOutputType | null
  }

  type GetAdSlotGroupByPayload<T extends AdSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdSlotGroupByOutputType[P]>
            : GetScalarType<T[P], AdSlotGroupByOutputType[P]>
        }
      >
    >


  export type AdSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mediaId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
    companionSlots?: boolean | AdSlot$companionSlotsArgs<ExtArgs>
    _count?: boolean | AdSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adSlot"]>

  export type AdSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mediaId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adSlot"]>

  export type AdSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mediaId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adSlot"]>

  export type AdSlotSelectScalar = {
    id?: boolean
    name?: boolean
    mediaId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mediaId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["adSlot"]>
  export type AdSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
    companionSlots?: boolean | AdSlot$companionSlotsArgs<ExtArgs>
    _count?: boolean | AdSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }
  export type AdSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $AdSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdSlot"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>
      companionSlots: Prisma.$CompanionSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mediaId: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adSlot"]>
    composites: {}
  }

  type AdSlotGetPayload<S extends boolean | null | undefined | AdSlotDefaultArgs> = $Result.GetResult<Prisma.$AdSlotPayload, S>

  type AdSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdSlotCountAggregateInputType | true
    }

  export interface AdSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdSlot'], meta: { name: 'AdSlot' } }
    /**
     * Find zero or one AdSlot that matches the filter.
     * @param {AdSlotFindUniqueArgs} args - Arguments to find a AdSlot
     * @example
     * // Get one AdSlot
     * const adSlot = await prisma.adSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdSlotFindUniqueArgs>(args: SelectSubset<T, AdSlotFindUniqueArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdSlotFindUniqueOrThrowArgs} args - Arguments to find a AdSlot
     * @example
     * // Get one AdSlot
     * const adSlot = await prisma.adSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AdSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotFindFirstArgs} args - Arguments to find a AdSlot
     * @example
     * // Get one AdSlot
     * const adSlot = await prisma.adSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdSlotFindFirstArgs>(args?: SelectSubset<T, AdSlotFindFirstArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotFindFirstOrThrowArgs} args - Arguments to find a AdSlot
     * @example
     * // Get one AdSlot
     * const adSlot = await prisma.adSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AdSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdSlots
     * const adSlots = await prisma.adSlot.findMany()
     * 
     * // Get first 10 AdSlots
     * const adSlots = await prisma.adSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adSlotWithIdOnly = await prisma.adSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdSlotFindManyArgs>(args?: SelectSubset<T, AdSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdSlot.
     * @param {AdSlotCreateArgs} args - Arguments to create a AdSlot.
     * @example
     * // Create one AdSlot
     * const AdSlot = await prisma.adSlot.create({
     *   data: {
     *     // ... data to create a AdSlot
     *   }
     * })
     * 
     */
    create<T extends AdSlotCreateArgs>(args: SelectSubset<T, AdSlotCreateArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdSlots.
     * @param {AdSlotCreateManyArgs} args - Arguments to create many AdSlots.
     * @example
     * // Create many AdSlots
     * const adSlot = await prisma.adSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdSlotCreateManyArgs>(args?: SelectSubset<T, AdSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdSlots and returns the data saved in the database.
     * @param {AdSlotCreateManyAndReturnArgs} args - Arguments to create many AdSlots.
     * @example
     * // Create many AdSlots
     * const adSlot = await prisma.adSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdSlots and only return the `id`
     * const adSlotWithIdOnly = await prisma.adSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, AdSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdSlot.
     * @param {AdSlotDeleteArgs} args - Arguments to delete one AdSlot.
     * @example
     * // Delete one AdSlot
     * const AdSlot = await prisma.adSlot.delete({
     *   where: {
     *     // ... filter to delete one AdSlot
     *   }
     * })
     * 
     */
    delete<T extends AdSlotDeleteArgs>(args: SelectSubset<T, AdSlotDeleteArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdSlot.
     * @param {AdSlotUpdateArgs} args - Arguments to update one AdSlot.
     * @example
     * // Update one AdSlot
     * const adSlot = await prisma.adSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdSlotUpdateArgs>(args: SelectSubset<T, AdSlotUpdateArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdSlots.
     * @param {AdSlotDeleteManyArgs} args - Arguments to filter AdSlots to delete.
     * @example
     * // Delete a few AdSlots
     * const { count } = await prisma.adSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdSlotDeleteManyArgs>(args?: SelectSubset<T, AdSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdSlots
     * const adSlot = await prisma.adSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdSlotUpdateManyArgs>(args: SelectSubset<T, AdSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdSlots and returns the data updated in the database.
     * @param {AdSlotUpdateManyAndReturnArgs} args - Arguments to update many AdSlots.
     * @example
     * // Update many AdSlots
     * const adSlot = await prisma.adSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdSlots and only return the `id`
     * const adSlotWithIdOnly = await prisma.adSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, AdSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdSlot.
     * @param {AdSlotUpsertArgs} args - Arguments to update or create a AdSlot.
     * @example
     * // Update or create a AdSlot
     * const adSlot = await prisma.adSlot.upsert({
     *   create: {
     *     // ... data to create a AdSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdSlot we want to update
     *   }
     * })
     */
    upsert<T extends AdSlotUpsertArgs>(args: SelectSubset<T, AdSlotUpsertArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotCountArgs} args - Arguments to filter AdSlots to count.
     * @example
     * // Count the number of AdSlots
     * const count = await prisma.adSlot.count({
     *   where: {
     *     // ... the filter for the AdSlots we want to count
     *   }
     * })
    **/
    count<T extends AdSlotCountArgs>(
      args?: Subset<T, AdSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdSlotAggregateArgs>(args: Subset<T, AdSlotAggregateArgs>): Prisma.PrismaPromise<GetAdSlotAggregateType<T>>

    /**
     * Group by AdSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdSlotGroupByArgs['orderBy'] }
        : { orderBy?: AdSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdSlot model
   */
  readonly fields: AdSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    companionSlots<T extends AdSlot$companionSlotsArgs<ExtArgs> = {}>(args?: Subset<T, AdSlot$companionSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdSlot model
   */
  interface AdSlotFieldRefs {
    readonly id: FieldRef<"AdSlot", 'String'>
    readonly name: FieldRef<"AdSlot", 'String'>
    readonly mediaId: FieldRef<"AdSlot", 'String'>
    readonly type: FieldRef<"AdSlot", 'String'>
    readonly createdAt: FieldRef<"AdSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"AdSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdSlot findUnique
   */
  export type AdSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter, which AdSlot to fetch.
     */
    where: AdSlotWhereUniqueInput
  }

  /**
   * AdSlot findUniqueOrThrow
   */
  export type AdSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter, which AdSlot to fetch.
     */
    where: AdSlotWhereUniqueInput
  }

  /**
   * AdSlot findFirst
   */
  export type AdSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter, which AdSlot to fetch.
     */
    where?: AdSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdSlots to fetch.
     */
    orderBy?: AdSlotOrderByWithRelationInput | AdSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdSlots.
     */
    cursor?: AdSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdSlots.
     */
    distinct?: AdSlotScalarFieldEnum | AdSlotScalarFieldEnum[]
  }

  /**
   * AdSlot findFirstOrThrow
   */
  export type AdSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter, which AdSlot to fetch.
     */
    where?: AdSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdSlots to fetch.
     */
    orderBy?: AdSlotOrderByWithRelationInput | AdSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdSlots.
     */
    cursor?: AdSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdSlots.
     */
    distinct?: AdSlotScalarFieldEnum | AdSlotScalarFieldEnum[]
  }

  /**
   * AdSlot findMany
   */
  export type AdSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter, which AdSlots to fetch.
     */
    where?: AdSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdSlots to fetch.
     */
    orderBy?: AdSlotOrderByWithRelationInput | AdSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdSlots.
     */
    cursor?: AdSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdSlots.
     */
    skip?: number
    distinct?: AdSlotScalarFieldEnum | AdSlotScalarFieldEnum[]
  }

  /**
   * AdSlot create
   */
  export type AdSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AdSlot.
     */
    data: XOR<AdSlotCreateInput, AdSlotUncheckedCreateInput>
  }

  /**
   * AdSlot createMany
   */
  export type AdSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdSlots.
     */
    data: AdSlotCreateManyInput | AdSlotCreateManyInput[]
  }

  /**
   * AdSlot createManyAndReturn
   */
  export type AdSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * The data used to create many AdSlots.
     */
    data: AdSlotCreateManyInput | AdSlotCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdSlot update
   */
  export type AdSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AdSlot.
     */
    data: XOR<AdSlotUpdateInput, AdSlotUncheckedUpdateInput>
    /**
     * Choose, which AdSlot to update.
     */
    where: AdSlotWhereUniqueInput
  }

  /**
   * AdSlot updateMany
   */
  export type AdSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdSlots.
     */
    data: XOR<AdSlotUpdateManyMutationInput, AdSlotUncheckedUpdateManyInput>
    /**
     * Filter which AdSlots to update
     */
    where?: AdSlotWhereInput
    /**
     * Limit how many AdSlots to update.
     */
    limit?: number
  }

  /**
   * AdSlot updateManyAndReturn
   */
  export type AdSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * The data used to update AdSlots.
     */
    data: XOR<AdSlotUpdateManyMutationInput, AdSlotUncheckedUpdateManyInput>
    /**
     * Filter which AdSlots to update
     */
    where?: AdSlotWhereInput
    /**
     * Limit how many AdSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdSlot upsert
   */
  export type AdSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AdSlot to update in case it exists.
     */
    where: AdSlotWhereUniqueInput
    /**
     * In case the AdSlot found by the `where` argument doesn't exist, create a new AdSlot with this data.
     */
    create: XOR<AdSlotCreateInput, AdSlotUncheckedCreateInput>
    /**
     * In case the AdSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdSlotUpdateInput, AdSlotUncheckedUpdateInput>
  }

  /**
   * AdSlot delete
   */
  export type AdSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
    /**
     * Filter which AdSlot to delete.
     */
    where: AdSlotWhereUniqueInput
  }

  /**
   * AdSlot deleteMany
   */
  export type AdSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdSlots to delete
     */
    where?: AdSlotWhereInput
    /**
     * Limit how many AdSlots to delete.
     */
    limit?: number
  }

  /**
   * AdSlot.companionSlots
   */
  export type AdSlot$companionSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    where?: CompanionSlotWhereInput
    orderBy?: CompanionSlotOrderByWithRelationInput | CompanionSlotOrderByWithRelationInput[]
    cursor?: CompanionSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionSlotScalarFieldEnum | CompanionSlotScalarFieldEnum[]
  }

  /**
   * AdSlot without action
   */
  export type AdSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdSlot
     */
    select?: AdSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdSlot
     */
    omit?: AdSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdSlotInclude<ExtArgs> | null
  }


  /**
   * Model CompanionSlot
   */

  export type AggregateCompanionSlot = {
    _count: CompanionSlotCountAggregateOutputType | null
    _avg: CompanionSlotAvgAggregateOutputType | null
    _sum: CompanionSlotSumAggregateOutputType | null
    _min: CompanionSlotMinAggregateOutputType | null
    _max: CompanionSlotMaxAggregateOutputType | null
  }

  export type CompanionSlotAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type CompanionSlotSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type CompanionSlotMinAggregateOutputType = {
    id: string | null
    name: string | null
    adSlotId: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionSlotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    adSlotId: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionSlotCountAggregateOutputType = {
    id: number
    name: number
    adSlotId: number
    width: number
    height: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanionSlotAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type CompanionSlotSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type CompanionSlotMinAggregateInputType = {
    id?: true
    name?: true
    adSlotId?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionSlotMaxAggregateInputType = {
    id?: true
    name?: true
    adSlotId?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionSlotCountAggregateInputType = {
    id?: true
    name?: true
    adSlotId?: true
    width?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanionSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionSlot to aggregate.
     */
    where?: CompanionSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionSlots to fetch.
     */
    orderBy?: CompanionSlotOrderByWithRelationInput | CompanionSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanionSlots
    **/
    _count?: true | CompanionSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanionSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanionSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionSlotMaxAggregateInputType
  }

  export type GetCompanionSlotAggregateType<T extends CompanionSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanionSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanionSlot[P]>
      : GetScalarType<T[P], AggregateCompanionSlot[P]>
  }




  export type CompanionSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionSlotWhereInput
    orderBy?: CompanionSlotOrderByWithAggregationInput | CompanionSlotOrderByWithAggregationInput[]
    by: CompanionSlotScalarFieldEnum[] | CompanionSlotScalarFieldEnum
    having?: CompanionSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionSlotCountAggregateInputType | true
    _avg?: CompanionSlotAvgAggregateInputType
    _sum?: CompanionSlotSumAggregateInputType
    _min?: CompanionSlotMinAggregateInputType
    _max?: CompanionSlotMaxAggregateInputType
  }

  export type CompanionSlotGroupByOutputType = {
    id: string
    name: string
    adSlotId: string
    width: number
    height: number
    createdAt: Date
    updatedAt: Date
    _count: CompanionSlotCountAggregateOutputType | null
    _avg: CompanionSlotAvgAggregateOutputType | null
    _sum: CompanionSlotSumAggregateOutputType | null
    _min: CompanionSlotMinAggregateOutputType | null
    _max: CompanionSlotMaxAggregateOutputType | null
  }

  type GetCompanionSlotGroupByPayload<T extends CompanionSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionSlotGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionSlotGroupByOutputType[P]>
        }
      >
    >


  export type CompanionSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adSlotId?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionSlot"]>

  export type CompanionSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adSlotId?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionSlot"]>

  export type CompanionSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    adSlotId?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionSlot"]>

  export type CompanionSlotSelectScalar = {
    id?: boolean
    name?: boolean
    adSlotId?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanionSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "adSlotId" | "width" | "height" | "createdAt" | "updatedAt", ExtArgs["result"]["companionSlot"]>
  export type CompanionSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }
  export type CompanionSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }
  export type CompanionSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adSlot?: boolean | AdSlotDefaultArgs<ExtArgs>
  }

  export type $CompanionSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanionSlot"
    objects: {
      adSlot: Prisma.$AdSlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      adSlotId: string
      width: number
      height: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companionSlot"]>
    composites: {}
  }

  type CompanionSlotGetPayload<S extends boolean | null | undefined | CompanionSlotDefaultArgs> = $Result.GetResult<Prisma.$CompanionSlotPayload, S>

  type CompanionSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionSlotCountAggregateInputType | true
    }

  export interface CompanionSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanionSlot'], meta: { name: 'CompanionSlot' } }
    /**
     * Find zero or one CompanionSlot that matches the filter.
     * @param {CompanionSlotFindUniqueArgs} args - Arguments to find a CompanionSlot
     * @example
     * // Get one CompanionSlot
     * const companionSlot = await prisma.companionSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionSlotFindUniqueArgs>(args: SelectSubset<T, CompanionSlotFindUniqueArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanionSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionSlotFindUniqueOrThrowArgs} args - Arguments to find a CompanionSlot
     * @example
     * // Get one CompanionSlot
     * const companionSlot = await prisma.companionSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotFindFirstArgs} args - Arguments to find a CompanionSlot
     * @example
     * // Get one CompanionSlot
     * const companionSlot = await prisma.companionSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionSlotFindFirstArgs>(args?: SelectSubset<T, CompanionSlotFindFirstArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotFindFirstOrThrowArgs} args - Arguments to find a CompanionSlot
     * @example
     * // Get one CompanionSlot
     * const companionSlot = await prisma.companionSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanionSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanionSlots
     * const companionSlots = await prisma.companionSlot.findMany()
     * 
     * // Get first 10 CompanionSlots
     * const companionSlots = await prisma.companionSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionSlotWithIdOnly = await prisma.companionSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionSlotFindManyArgs>(args?: SelectSubset<T, CompanionSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanionSlot.
     * @param {CompanionSlotCreateArgs} args - Arguments to create a CompanionSlot.
     * @example
     * // Create one CompanionSlot
     * const CompanionSlot = await prisma.companionSlot.create({
     *   data: {
     *     // ... data to create a CompanionSlot
     *   }
     * })
     * 
     */
    create<T extends CompanionSlotCreateArgs>(args: SelectSubset<T, CompanionSlotCreateArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanionSlots.
     * @param {CompanionSlotCreateManyArgs} args - Arguments to create many CompanionSlots.
     * @example
     * // Create many CompanionSlots
     * const companionSlot = await prisma.companionSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionSlotCreateManyArgs>(args?: SelectSubset<T, CompanionSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanionSlots and returns the data saved in the database.
     * @param {CompanionSlotCreateManyAndReturnArgs} args - Arguments to create many CompanionSlots.
     * @example
     * // Create many CompanionSlots
     * const companionSlot = await prisma.companionSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanionSlots and only return the `id`
     * const companionSlotWithIdOnly = await prisma.companionSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanionSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanionSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanionSlot.
     * @param {CompanionSlotDeleteArgs} args - Arguments to delete one CompanionSlot.
     * @example
     * // Delete one CompanionSlot
     * const CompanionSlot = await prisma.companionSlot.delete({
     *   where: {
     *     // ... filter to delete one CompanionSlot
     *   }
     * })
     * 
     */
    delete<T extends CompanionSlotDeleteArgs>(args: SelectSubset<T, CompanionSlotDeleteArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanionSlot.
     * @param {CompanionSlotUpdateArgs} args - Arguments to update one CompanionSlot.
     * @example
     * // Update one CompanionSlot
     * const companionSlot = await prisma.companionSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionSlotUpdateArgs>(args: SelectSubset<T, CompanionSlotUpdateArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanionSlots.
     * @param {CompanionSlotDeleteManyArgs} args - Arguments to filter CompanionSlots to delete.
     * @example
     * // Delete a few CompanionSlots
     * const { count } = await prisma.companionSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionSlotDeleteManyArgs>(args?: SelectSubset<T, CompanionSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanionSlots
     * const companionSlot = await prisma.companionSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionSlotUpdateManyArgs>(args: SelectSubset<T, CompanionSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionSlots and returns the data updated in the database.
     * @param {CompanionSlotUpdateManyAndReturnArgs} args - Arguments to update many CompanionSlots.
     * @example
     * // Update many CompanionSlots
     * const companionSlot = await prisma.companionSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanionSlots and only return the `id`
     * const companionSlotWithIdOnly = await prisma.companionSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanionSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanionSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanionSlot.
     * @param {CompanionSlotUpsertArgs} args - Arguments to update or create a CompanionSlot.
     * @example
     * // Update or create a CompanionSlot
     * const companionSlot = await prisma.companionSlot.upsert({
     *   create: {
     *     // ... data to create a CompanionSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanionSlot we want to update
     *   }
     * })
     */
    upsert<T extends CompanionSlotUpsertArgs>(args: SelectSubset<T, CompanionSlotUpsertArgs<ExtArgs>>): Prisma__CompanionSlotClient<$Result.GetResult<Prisma.$CompanionSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanionSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotCountArgs} args - Arguments to filter CompanionSlots to count.
     * @example
     * // Count the number of CompanionSlots
     * const count = await prisma.companionSlot.count({
     *   where: {
     *     // ... the filter for the CompanionSlots we want to count
     *   }
     * })
    **/
    count<T extends CompanionSlotCountArgs>(
      args?: Subset<T, CompanionSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanionSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanionSlotAggregateArgs>(args: Subset<T, CompanionSlotAggregateArgs>): Prisma.PrismaPromise<GetCompanionSlotAggregateType<T>>

    /**
     * Group by CompanionSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanionSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionSlotGroupByArgs['orderBy'] }
        : { orderBy?: CompanionSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanionSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanionSlot model
   */
  readonly fields: CompanionSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanionSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adSlot<T extends AdSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdSlotDefaultArgs<ExtArgs>>): Prisma__AdSlotClient<$Result.GetResult<Prisma.$AdSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanionSlot model
   */
  interface CompanionSlotFieldRefs {
    readonly id: FieldRef<"CompanionSlot", 'String'>
    readonly name: FieldRef<"CompanionSlot", 'String'>
    readonly adSlotId: FieldRef<"CompanionSlot", 'String'>
    readonly width: FieldRef<"CompanionSlot", 'Int'>
    readonly height: FieldRef<"CompanionSlot", 'Int'>
    readonly createdAt: FieldRef<"CompanionSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanionSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanionSlot findUnique
   */
  export type CompanionSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter, which CompanionSlot to fetch.
     */
    where: CompanionSlotWhereUniqueInput
  }

  /**
   * CompanionSlot findUniqueOrThrow
   */
  export type CompanionSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter, which CompanionSlot to fetch.
     */
    where: CompanionSlotWhereUniqueInput
  }

  /**
   * CompanionSlot findFirst
   */
  export type CompanionSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter, which CompanionSlot to fetch.
     */
    where?: CompanionSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionSlots to fetch.
     */
    orderBy?: CompanionSlotOrderByWithRelationInput | CompanionSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionSlots.
     */
    cursor?: CompanionSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionSlots.
     */
    distinct?: CompanionSlotScalarFieldEnum | CompanionSlotScalarFieldEnum[]
  }

  /**
   * CompanionSlot findFirstOrThrow
   */
  export type CompanionSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter, which CompanionSlot to fetch.
     */
    where?: CompanionSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionSlots to fetch.
     */
    orderBy?: CompanionSlotOrderByWithRelationInput | CompanionSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionSlots.
     */
    cursor?: CompanionSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionSlots.
     */
    distinct?: CompanionSlotScalarFieldEnum | CompanionSlotScalarFieldEnum[]
  }

  /**
   * CompanionSlot findMany
   */
  export type CompanionSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter, which CompanionSlots to fetch.
     */
    where?: CompanionSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionSlots to fetch.
     */
    orderBy?: CompanionSlotOrderByWithRelationInput | CompanionSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanionSlots.
     */
    cursor?: CompanionSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionSlots.
     */
    skip?: number
    distinct?: CompanionSlotScalarFieldEnum | CompanionSlotScalarFieldEnum[]
  }

  /**
   * CompanionSlot create
   */
  export type CompanionSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanionSlot.
     */
    data: XOR<CompanionSlotCreateInput, CompanionSlotUncheckedCreateInput>
  }

  /**
   * CompanionSlot createMany
   */
  export type CompanionSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanionSlots.
     */
    data: CompanionSlotCreateManyInput | CompanionSlotCreateManyInput[]
  }

  /**
   * CompanionSlot createManyAndReturn
   */
  export type CompanionSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * The data used to create many CompanionSlots.
     */
    data: CompanionSlotCreateManyInput | CompanionSlotCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionSlot update
   */
  export type CompanionSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanionSlot.
     */
    data: XOR<CompanionSlotUpdateInput, CompanionSlotUncheckedUpdateInput>
    /**
     * Choose, which CompanionSlot to update.
     */
    where: CompanionSlotWhereUniqueInput
  }

  /**
   * CompanionSlot updateMany
   */
  export type CompanionSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanionSlots.
     */
    data: XOR<CompanionSlotUpdateManyMutationInput, CompanionSlotUncheckedUpdateManyInput>
    /**
     * Filter which CompanionSlots to update
     */
    where?: CompanionSlotWhereInput
    /**
     * Limit how many CompanionSlots to update.
     */
    limit?: number
  }

  /**
   * CompanionSlot updateManyAndReturn
   */
  export type CompanionSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * The data used to update CompanionSlots.
     */
    data: XOR<CompanionSlotUpdateManyMutationInput, CompanionSlotUncheckedUpdateManyInput>
    /**
     * Filter which CompanionSlots to update
     */
    where?: CompanionSlotWhereInput
    /**
     * Limit how many CompanionSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionSlot upsert
   */
  export type CompanionSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanionSlot to update in case it exists.
     */
    where: CompanionSlotWhereUniqueInput
    /**
     * In case the CompanionSlot found by the `where` argument doesn't exist, create a new CompanionSlot with this data.
     */
    create: XOR<CompanionSlotCreateInput, CompanionSlotUncheckedCreateInput>
    /**
     * In case the CompanionSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionSlotUpdateInput, CompanionSlotUncheckedUpdateInput>
  }

  /**
   * CompanionSlot delete
   */
  export type CompanionSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
    /**
     * Filter which CompanionSlot to delete.
     */
    where: CompanionSlotWhereUniqueInput
  }

  /**
   * CompanionSlot deleteMany
   */
  export type CompanionSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionSlots to delete
     */
    where?: CompanionSlotWhereInput
    /**
     * Limit how many CompanionSlots to delete.
     */
    limit?: number
  }

  /**
   * CompanionSlot without action
   */
  export type CompanionSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionSlot
     */
    select?: CompanionSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionSlot
     */
    omit?: CompanionSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionSlotInclude<ExtArgs> | null
  }


  /**
   * Model Advertiser
   */

  export type AggregateAdvertiser = {
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  export type AdvertiserMinAggregateOutputType = {
    id: string | null
    name: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdvertiserCountAggregateOutputType = {
    id: number
    name: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdvertiserMinAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiserMaxAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdvertiserCountAggregateInputType = {
    id?: true
    name?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdvertiserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertiser to aggregate.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisers
    **/
    _count?: true | AdvertiserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertiserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertiserMaxAggregateInputType
  }

  export type GetAdvertiserAggregateType<T extends AdvertiserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertiser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertiser[P]>
      : GetScalarType<T[P], AggregateAdvertiser[P]>
  }




  export type AdvertiserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertiserWhereInput
    orderBy?: AdvertiserOrderByWithAggregationInput | AdvertiserOrderByWithAggregationInput[]
    by: AdvertiserScalarFieldEnum[] | AdvertiserScalarFieldEnum
    having?: AdvertiserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertiserCountAggregateInputType | true
    _min?: AdvertiserMinAggregateInputType
    _max?: AdvertiserMaxAggregateInputType
  }

  export type AdvertiserGroupByOutputType = {
    id: string
    name: string
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  type GetAdvertiserGroupByPayload<T extends AdvertiserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertiserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertiserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
        }
      >
    >


  export type AdvertiserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    campaigns?: boolean | Advertiser$campaignsArgs<ExtArgs>
    adGroups?: boolean | Advertiser$adGroupsArgs<ExtArgs>
    ads?: boolean | Advertiser$adsArgs<ExtArgs>
    _count?: boolean | AdvertiserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectScalar = {
    id?: boolean
    name?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdvertiserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["advertiser"]>
  export type AdvertiserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    campaigns?: boolean | Advertiser$campaignsArgs<ExtArgs>
    adGroups?: boolean | Advertiser$adGroupsArgs<ExtArgs>
    ads?: boolean | Advertiser$adsArgs<ExtArgs>
    _count?: boolean | AdvertiserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvertiserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AdvertiserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AdvertiserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertiser"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      adGroups: Prisma.$AdGroupPayload<ExtArgs>[]
      ads: Prisma.$AdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["advertiser"]>
    composites: {}
  }

  type AdvertiserGetPayload<S extends boolean | null | undefined | AdvertiserDefaultArgs> = $Result.GetResult<Prisma.$AdvertiserPayload, S>

  type AdvertiserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertiserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertiserCountAggregateInputType | true
    }

  export interface AdvertiserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertiser'], meta: { name: 'Advertiser' } }
    /**
     * Find zero or one Advertiser that matches the filter.
     * @param {AdvertiserFindUniqueArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertiserFindUniqueArgs>(args: SelectSubset<T, AdvertiserFindUniqueArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertiser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertiserFindUniqueOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertiserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertiserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertiserFindFirstArgs>(args?: SelectSubset<T, AdvertiserFindFirstArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertiserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertiserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisers
     * const advertisers = await prisma.advertiser.findMany()
     * 
     * // Get first 10 Advertisers
     * const advertisers = await prisma.advertiser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertiserFindManyArgs>(args?: SelectSubset<T, AdvertiserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertiser.
     * @param {AdvertiserCreateArgs} args - Arguments to create a Advertiser.
     * @example
     * // Create one Advertiser
     * const Advertiser = await prisma.advertiser.create({
     *   data: {
     *     // ... data to create a Advertiser
     *   }
     * })
     * 
     */
    create<T extends AdvertiserCreateArgs>(args: SelectSubset<T, AdvertiserCreateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisers.
     * @param {AdvertiserCreateManyArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertiserCreateManyArgs>(args?: SelectSubset<T, AdvertiserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisers and returns the data saved in the database.
     * @param {AdvertiserCreateManyAndReturnArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertiserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertiserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertiser.
     * @param {AdvertiserDeleteArgs} args - Arguments to delete one Advertiser.
     * @example
     * // Delete one Advertiser
     * const Advertiser = await prisma.advertiser.delete({
     *   where: {
     *     // ... filter to delete one Advertiser
     *   }
     * })
     * 
     */
    delete<T extends AdvertiserDeleteArgs>(args: SelectSubset<T, AdvertiserDeleteArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertiser.
     * @param {AdvertiserUpdateArgs} args - Arguments to update one Advertiser.
     * @example
     * // Update one Advertiser
     * const advertiser = await prisma.advertiser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertiserUpdateArgs>(args: SelectSubset<T, AdvertiserUpdateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisers.
     * @param {AdvertiserDeleteManyArgs} args - Arguments to filter Advertisers to delete.
     * @example
     * // Delete a few Advertisers
     * const { count } = await prisma.advertiser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertiserDeleteManyArgs>(args?: SelectSubset<T, AdvertiserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertiserUpdateManyArgs>(args: SelectSubset<T, AdvertiserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers and returns the data updated in the database.
     * @param {AdvertiserUpdateManyAndReturnArgs} args - Arguments to update many Advertisers.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertiserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertiserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertiser.
     * @param {AdvertiserUpsertArgs} args - Arguments to update or create a Advertiser.
     * @example
     * // Update or create a Advertiser
     * const advertiser = await prisma.advertiser.upsert({
     *   create: {
     *     // ... data to create a Advertiser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertiser we want to update
     *   }
     * })
     */
    upsert<T extends AdvertiserUpsertArgs>(args: SelectSubset<T, AdvertiserUpsertArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserCountArgs} args - Arguments to filter Advertisers to count.
     * @example
     * // Count the number of Advertisers
     * const count = await prisma.advertiser.count({
     *   where: {
     *     // ... the filter for the Advertisers we want to count
     *   }
     * })
    **/
    count<T extends AdvertiserCountArgs>(
      args?: Subset<T, AdvertiserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertiserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertiserAggregateArgs>(args: Subset<T, AdvertiserAggregateArgs>): Prisma.PrismaPromise<GetAdvertiserAggregateType<T>>

    /**
     * Group by Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertiserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertiserGroupByArgs['orderBy'] }
        : { orderBy?: AdvertiserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertiserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertiserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertiser model
   */
  readonly fields: AdvertiserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertiser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertiserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaigns<T extends Advertiser$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Advertiser$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adGroups<T extends Advertiser$adGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Advertiser$adGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ads<T extends Advertiser$adsArgs<ExtArgs> = {}>(args?: Subset<T, Advertiser$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advertiser model
   */
  interface AdvertiserFieldRefs {
    readonly id: FieldRef<"Advertiser", 'String'>
    readonly name: FieldRef<"Advertiser", 'String'>
    readonly organizationId: FieldRef<"Advertiser", 'String'>
    readonly createdAt: FieldRef<"Advertiser", 'DateTime'>
    readonly updatedAt: FieldRef<"Advertiser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advertiser findUnique
   */
  export type AdvertiserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findUniqueOrThrow
   */
  export type AdvertiserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findFirst
   */
  export type AdvertiserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findFirstOrThrow
   */
  export type AdvertiserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findMany
   */
  export type AdvertiserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertisers to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser create
   */
  export type AdvertiserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to create a Advertiser.
     */
    data: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
  }

  /**
   * Advertiser createMany
   */
  export type AdvertiserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
  }

  /**
   * Advertiser createManyAndReturn
   */
  export type AdvertiserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser update
   */
  export type AdvertiserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to update a Advertiser.
     */
    data: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
    /**
     * Choose, which Advertiser to update.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser updateMany
   */
  export type AdvertiserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
  }

  /**
   * Advertiser updateManyAndReturn
   */
  export type AdvertiserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser upsert
   */
  export type AdvertiserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The filter to search for the Advertiser to update in case it exists.
     */
    where: AdvertiserWhereUniqueInput
    /**
     * In case the Advertiser found by the `where` argument doesn't exist, create a new Advertiser with this data.
     */
    create: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
    /**
     * In case the Advertiser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
  }

  /**
   * Advertiser delete
   */
  export type AdvertiserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter which Advertiser to delete.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser deleteMany
   */
  export type AdvertiserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisers to delete
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to delete.
     */
    limit?: number
  }

  /**
   * Advertiser.campaigns
   */
  export type Advertiser$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Advertiser.adGroups
   */
  export type Advertiser$adGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    where?: AdGroupWhereInput
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    cursor?: AdGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * Advertiser.ads
   */
  export type Advertiser$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    cursor?: AdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Advertiser without action
   */
  export type AdvertiserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    budget: Decimal | null
    spentBudget: Decimal | null
    remainingBudget: Decimal | null
  }

  export type CampaignSumAggregateOutputType = {
    budget: Decimal | null
    spentBudget: Decimal | null
    remainingBudget: Decimal | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    advertiserId: string | null
    startAt: Date | null
    endAt: Date | null
    budget: Decimal | null
    budgetType: string | null
    deliveryPace: string | null
    spentBudget: Decimal | null
    remainingBudget: Decimal | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    advertiserId: string | null
    startAt: Date | null
    endAt: Date | null
    budget: Decimal | null
    budgetType: string | null
    deliveryPace: string | null
    spentBudget: Decimal | null
    remainingBudget: Decimal | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    advertiserId: number
    startAt: number
    endAt: number
    budget: number
    budgetType: number
    deliveryPace: number
    spentBudget: number
    remainingBudget: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    budget?: true
    spentBudget?: true
    remainingBudget?: true
  }

  export type CampaignSumAggregateInputType = {
    budget?: true
    spentBudget?: true
    remainingBudget?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    advertiserId?: true
    startAt?: true
    endAt?: true
    budget?: true
    budgetType?: true
    deliveryPace?: true
    spentBudget?: true
    remainingBudget?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    advertiserId?: true
    startAt?: true
    endAt?: true
    budget?: true
    budgetType?: true
    deliveryPace?: true
    spentBudget?: true
    remainingBudget?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    advertiserId?: true
    startAt?: true
    endAt?: true
    budget?: true
    budgetType?: true
    deliveryPace?: true
    spentBudget?: true
    remainingBudget?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    advertiserId: string
    startAt: Date
    endAt: Date
    budget: Decimal
    budgetType: string
    deliveryPace: string
    spentBudget: Decimal
    remainingBudget: Decimal
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    advertiserId?: boolean
    startAt?: boolean
    endAt?: boolean
    budget?: boolean
    budgetType?: boolean
    deliveryPace?: boolean
    spentBudget?: boolean
    remainingBudget?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adGroups?: boolean | Campaign$adGroupsArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    advertiserId?: boolean
    startAt?: boolean
    endAt?: boolean
    budget?: boolean
    budgetType?: boolean
    deliveryPace?: boolean
    spentBudget?: boolean
    remainingBudget?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    advertiserId?: boolean
    startAt?: boolean
    endAt?: boolean
    budget?: boolean
    budgetType?: boolean
    deliveryPace?: boolean
    spentBudget?: boolean
    remainingBudget?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    advertiserId?: boolean
    startAt?: boolean
    endAt?: boolean
    budget?: boolean
    budgetType?: boolean
    deliveryPace?: boolean
    spentBudget?: boolean
    remainingBudget?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "advertiserId" | "startAt" | "endAt" | "budget" | "budgetType" | "deliveryPace" | "spentBudget" | "remainingBudget" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroups?: boolean | Campaign$adGroupsArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      adGroups: Prisma.$AdGroupPayload<ExtArgs>[]
      advertiser: Prisma.$AdvertiserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      advertiserId: string
      startAt: Date
      endAt: Date
      budget: Prisma.Decimal
      budgetType: string
      deliveryPace: string
      spentBudget: Prisma.Decimal
      remainingBudget: Prisma.Decimal
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adGroups<T extends Campaign$adGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$adGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advertiser<T extends AdvertiserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertiserDefaultArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly advertiserId: FieldRef<"Campaign", 'String'>
    readonly startAt: FieldRef<"Campaign", 'DateTime'>
    readonly endAt: FieldRef<"Campaign", 'DateTime'>
    readonly budget: FieldRef<"Campaign", 'Decimal'>
    readonly budgetType: FieldRef<"Campaign", 'String'>
    readonly deliveryPace: FieldRef<"Campaign", 'String'>
    readonly spentBudget: FieldRef<"Campaign", 'Decimal'>
    readonly remainingBudget: FieldRef<"Campaign", 'Decimal'>
    readonly status: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.adGroups
   */
  export type Campaign$adGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    where?: AdGroupWhereInput
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    cursor?: AdGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model AdGroup
   */

  export type AggregateAdGroup = {
    _count: AdGroupCountAggregateOutputType | null
    _avg: AdGroupAvgAggregateOutputType | null
    _sum: AdGroupSumAggregateOutputType | null
    _min: AdGroupMinAggregateOutputType | null
    _max: AdGroupMaxAggregateOutputType | null
  }

  export type AdGroupAvgAggregateOutputType = {
    bidPriceCPM: Decimal | null
    frequencyCapImpressions: number | null
    frequencyCapWindow: number | null
  }

  export type AdGroupSumAggregateOutputType = {
    bidPriceCPM: Decimal | null
    frequencyCapImpressions: number | null
    frequencyCapWindow: number | null
  }

  export type AdGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    categories: string | null
    bidPriceCPM: Decimal | null
    frequencyCapImpressions: number | null
    frequencyCapWindow: number | null
    frequencyCapUnit: string | null
    advertiserId: string | null
    campaignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categories: string | null
    bidPriceCPM: Decimal | null
    frequencyCapImpressions: number | null
    frequencyCapWindow: number | null
    frequencyCapUnit: string | null
    advertiserId: string | null
    campaignId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdGroupCountAggregateOutputType = {
    id: number
    name: number
    categories: number
    bidPriceCPM: number
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: number
    advertiserId: number
    campaignId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdGroupAvgAggregateInputType = {
    bidPriceCPM?: true
    frequencyCapImpressions?: true
    frequencyCapWindow?: true
  }

  export type AdGroupSumAggregateInputType = {
    bidPriceCPM?: true
    frequencyCapImpressions?: true
    frequencyCapWindow?: true
  }

  export type AdGroupMinAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    bidPriceCPM?: true
    frequencyCapImpressions?: true
    frequencyCapWindow?: true
    frequencyCapUnit?: true
    advertiserId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdGroupMaxAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    bidPriceCPM?: true
    frequencyCapImpressions?: true
    frequencyCapWindow?: true
    frequencyCapUnit?: true
    advertiserId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdGroupCountAggregateInputType = {
    id?: true
    name?: true
    categories?: true
    bidPriceCPM?: true
    frequencyCapImpressions?: true
    frequencyCapWindow?: true
    frequencyCapUnit?: true
    advertiserId?: true
    campaignId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroup to aggregate.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdGroups
    **/
    _count?: true | AdGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdGroupMaxAggregateInputType
  }

  export type GetAdGroupAggregateType<T extends AdGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateAdGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdGroup[P]>
      : GetScalarType<T[P], AggregateAdGroup[P]>
  }




  export type AdGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdGroupWhereInput
    orderBy?: AdGroupOrderByWithAggregationInput | AdGroupOrderByWithAggregationInput[]
    by: AdGroupScalarFieldEnum[] | AdGroupScalarFieldEnum
    having?: AdGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdGroupCountAggregateInputType | true
    _avg?: AdGroupAvgAggregateInputType
    _sum?: AdGroupSumAggregateInputType
    _min?: AdGroupMinAggregateInputType
    _max?: AdGroupMaxAggregateInputType
  }

  export type AdGroupGroupByOutputType = {
    id: string
    name: string
    categories: string | null
    bidPriceCPM: Decimal
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    campaignId: string
    createdAt: Date
    updatedAt: Date
    _count: AdGroupCountAggregateOutputType | null
    _avg: AdGroupAvgAggregateOutputType | null
    _sum: AdGroupSumAggregateOutputType | null
    _min: AdGroupMinAggregateOutputType | null
    _max: AdGroupMaxAggregateOutputType | null
  }

  type GetAdGroupGroupByPayload<T extends AdGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupGroupByOutputType[P]>
        }
      >
    >


  export type AdGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    bidPriceCPM?: boolean
    frequencyCapImpressions?: boolean
    frequencyCapWindow?: boolean
    frequencyCapUnit?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ads?: boolean | AdGroup$adsArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    _count?: boolean | AdGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroup"]>

  export type AdGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    bidPriceCPM?: boolean
    frequencyCapImpressions?: boolean
    frequencyCapWindow?: boolean
    frequencyCapUnit?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroup"]>

  export type AdGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean
    bidPriceCPM?: boolean
    frequencyCapImpressions?: boolean
    frequencyCapWindow?: boolean
    frequencyCapUnit?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroup"]>

  export type AdGroupSelectScalar = {
    id?: boolean
    name?: boolean
    categories?: boolean
    bidPriceCPM?: boolean
    frequencyCapImpressions?: boolean
    frequencyCapWindow?: boolean
    frequencyCapUnit?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categories" | "bidPriceCPM" | "frequencyCapImpressions" | "frequencyCapWindow" | "frequencyCapUnit" | "advertiserId" | "campaignId" | "createdAt" | "updatedAt", ExtArgs["result"]["adGroup"]>
  export type AdGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ads?: boolean | AdGroup$adsArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    _count?: boolean | AdGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type AdGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $AdGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdGroup"
    objects: {
      ads: Prisma.$AdPayload<ExtArgs>[]
      advertiser: Prisma.$AdvertiserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categories: string | null
      bidPriceCPM: Prisma.Decimal
      frequencyCapImpressions: number
      frequencyCapWindow: number
      frequencyCapUnit: string
      advertiserId: string
      campaignId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adGroup"]>
    composites: {}
  }

  type AdGroupGetPayload<S extends boolean | null | undefined | AdGroupDefaultArgs> = $Result.GetResult<Prisma.$AdGroupPayload, S>

  type AdGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdGroupCountAggregateInputType | true
    }

  export interface AdGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdGroup'], meta: { name: 'AdGroup' } }
    /**
     * Find zero or one AdGroup that matches the filter.
     * @param {AdGroupFindUniqueArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdGroupFindUniqueArgs>(args: SelectSubset<T, AdGroupFindUniqueArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdGroupFindUniqueOrThrowArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, AdGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindFirstArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdGroupFindFirstArgs>(args?: SelectSubset<T, AdGroupFindFirstArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindFirstOrThrowArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, AdGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdGroups
     * const adGroups = await prisma.adGroup.findMany()
     * 
     * // Get first 10 AdGroups
     * const adGroups = await prisma.adGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adGroupWithIdOnly = await prisma.adGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdGroupFindManyArgs>(args?: SelectSubset<T, AdGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdGroup.
     * @param {AdGroupCreateArgs} args - Arguments to create a AdGroup.
     * @example
     * // Create one AdGroup
     * const AdGroup = await prisma.adGroup.create({
     *   data: {
     *     // ... data to create a AdGroup
     *   }
     * })
     * 
     */
    create<T extends AdGroupCreateArgs>(args: SelectSubset<T, AdGroupCreateArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdGroups.
     * @param {AdGroupCreateManyArgs} args - Arguments to create many AdGroups.
     * @example
     * // Create many AdGroups
     * const adGroup = await prisma.adGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdGroupCreateManyArgs>(args?: SelectSubset<T, AdGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdGroups and returns the data saved in the database.
     * @param {AdGroupCreateManyAndReturnArgs} args - Arguments to create many AdGroups.
     * @example
     * // Create many AdGroups
     * const adGroup = await prisma.adGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdGroups and only return the `id`
     * const adGroupWithIdOnly = await prisma.adGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, AdGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdGroup.
     * @param {AdGroupDeleteArgs} args - Arguments to delete one AdGroup.
     * @example
     * // Delete one AdGroup
     * const AdGroup = await prisma.adGroup.delete({
     *   where: {
     *     // ... filter to delete one AdGroup
     *   }
     * })
     * 
     */
    delete<T extends AdGroupDeleteArgs>(args: SelectSubset<T, AdGroupDeleteArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdGroup.
     * @param {AdGroupUpdateArgs} args - Arguments to update one AdGroup.
     * @example
     * // Update one AdGroup
     * const adGroup = await prisma.adGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdGroupUpdateArgs>(args: SelectSubset<T, AdGroupUpdateArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdGroups.
     * @param {AdGroupDeleteManyArgs} args - Arguments to filter AdGroups to delete.
     * @example
     * // Delete a few AdGroups
     * const { count } = await prisma.adGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdGroupDeleteManyArgs>(args?: SelectSubset<T, AdGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdGroups
     * const adGroup = await prisma.adGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdGroupUpdateManyArgs>(args: SelectSubset<T, AdGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdGroups and returns the data updated in the database.
     * @param {AdGroupUpdateManyAndReturnArgs} args - Arguments to update many AdGroups.
     * @example
     * // Update many AdGroups
     * const adGroup = await prisma.adGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdGroups and only return the `id`
     * const adGroupWithIdOnly = await prisma.adGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, AdGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdGroup.
     * @param {AdGroupUpsertArgs} args - Arguments to update or create a AdGroup.
     * @example
     * // Update or create a AdGroup
     * const adGroup = await prisma.adGroup.upsert({
     *   create: {
     *     // ... data to create a AdGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdGroup we want to update
     *   }
     * })
     */
    upsert<T extends AdGroupUpsertArgs>(args: SelectSubset<T, AdGroupUpsertArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupCountArgs} args - Arguments to filter AdGroups to count.
     * @example
     * // Count the number of AdGroups
     * const count = await prisma.adGroup.count({
     *   where: {
     *     // ... the filter for the AdGroups we want to count
     *   }
     * })
    **/
    count<T extends AdGroupCountArgs>(
      args?: Subset<T, AdGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdGroupAggregateArgs>(args: Subset<T, AdGroupAggregateArgs>): Prisma.PrismaPromise<GetAdGroupAggregateType<T>>

    /**
     * Group by AdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdGroup model
   */
  readonly fields: AdGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ads<T extends AdGroup$adsArgs<ExtArgs> = {}>(args?: Subset<T, AdGroup$adsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advertiser<T extends AdvertiserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertiserDefaultArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdGroup model
   */
  interface AdGroupFieldRefs {
    readonly id: FieldRef<"AdGroup", 'String'>
    readonly name: FieldRef<"AdGroup", 'String'>
    readonly categories: FieldRef<"AdGroup", 'String'>
    readonly bidPriceCPM: FieldRef<"AdGroup", 'Decimal'>
    readonly frequencyCapImpressions: FieldRef<"AdGroup", 'Int'>
    readonly frequencyCapWindow: FieldRef<"AdGroup", 'Int'>
    readonly frequencyCapUnit: FieldRef<"AdGroup", 'String'>
    readonly advertiserId: FieldRef<"AdGroup", 'String'>
    readonly campaignId: FieldRef<"AdGroup", 'String'>
    readonly createdAt: FieldRef<"AdGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"AdGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdGroup findUnique
   */
  export type AdGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup findUniqueOrThrow
   */
  export type AdGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup findFirst
   */
  export type AdGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdGroups.
     */
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup findFirstOrThrow
   */
  export type AdGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdGroups.
     */
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup findMany
   */
  export type AdGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup create
   */
  export type AdGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a AdGroup.
     */
    data: XOR<AdGroupCreateInput, AdGroupUncheckedCreateInput>
  }

  /**
   * AdGroup createMany
   */
  export type AdGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdGroups.
     */
    data: AdGroupCreateManyInput | AdGroupCreateManyInput[]
  }

  /**
   * AdGroup createManyAndReturn
   */
  export type AdGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * The data used to create many AdGroups.
     */
    data: AdGroupCreateManyInput | AdGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdGroup update
   */
  export type AdGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a AdGroup.
     */
    data: XOR<AdGroupUpdateInput, AdGroupUncheckedUpdateInput>
    /**
     * Choose, which AdGroup to update.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup updateMany
   */
  export type AdGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdGroups.
     */
    data: XOR<AdGroupUpdateManyMutationInput, AdGroupUncheckedUpdateManyInput>
    /**
     * Filter which AdGroups to update
     */
    where?: AdGroupWhereInput
    /**
     * Limit how many AdGroups to update.
     */
    limit?: number
  }

  /**
   * AdGroup updateManyAndReturn
   */
  export type AdGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * The data used to update AdGroups.
     */
    data: XOR<AdGroupUpdateManyMutationInput, AdGroupUncheckedUpdateManyInput>
    /**
     * Filter which AdGroups to update
     */
    where?: AdGroupWhereInput
    /**
     * Limit how many AdGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdGroup upsert
   */
  export type AdGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the AdGroup to update in case it exists.
     */
    where: AdGroupWhereUniqueInput
    /**
     * In case the AdGroup found by the `where` argument doesn't exist, create a new AdGroup with this data.
     */
    create: XOR<AdGroupCreateInput, AdGroupUncheckedCreateInput>
    /**
     * In case the AdGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdGroupUpdateInput, AdGroupUncheckedUpdateInput>
  }

  /**
   * AdGroup delete
   */
  export type AdGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter which AdGroup to delete.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup deleteMany
   */
  export type AdGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroups to delete
     */
    where?: AdGroupWhereInput
    /**
     * Limit how many AdGroups to delete.
     */
    limit?: number
  }

  /**
   * AdGroup.ads
   */
  export type AdGroup$adsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    where?: AdWhereInput
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    cursor?: AdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * AdGroup without action
   */
  export type AdGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
  }


  /**
   * Model Ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  export type AdAvgAggregateOutputType = {
    duration: number | null
    width: number | null
    height: number | null
  }

  export type AdSumAggregateOutputType = {
    duration: number | null
    width: number | null
    height: number | null
  }

  export type AdMinAggregateOutputType = {
    id: string | null
    advertiserId: string | null
    adGroupId: string | null
    type: string | null
    url: string | null
    duration: number | null
    width: number | null
    height: number | null
    mimeType: string | null
    clickThroughURL: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdMaxAggregateOutputType = {
    id: string | null
    advertiserId: string | null
    adGroupId: string | null
    type: string | null
    url: string | null
    duration: number | null
    width: number | null
    height: number | null
    mimeType: string | null
    clickThroughURL: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdCountAggregateOutputType = {
    id: number
    advertiserId: number
    adGroupId: number
    type: number
    url: number
    duration: number
    width: number
    height: number
    mimeType: number
    clickThroughURL: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdAvgAggregateInputType = {
    duration?: true
    width?: true
    height?: true
  }

  export type AdSumAggregateInputType = {
    duration?: true
    width?: true
    height?: true
  }

  export type AdMinAggregateInputType = {
    id?: true
    advertiserId?: true
    adGroupId?: true
    type?: true
    url?: true
    duration?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdMaxAggregateInputType = {
    id?: true
    advertiserId?: true
    adGroupId?: true
    type?: true
    url?: true
    duration?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdCountAggregateInputType = {
    id?: true
    advertiserId?: true
    adGroupId?: true
    type?: true
    url?: true
    duration?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ad to aggregate.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ads
    **/
    _count?: true | AdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMaxAggregateInputType
  }

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
        [P in keyof T & keyof AggregateAd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>
  }




  export type AdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdWhereInput
    orderBy?: AdOrderByWithAggregationInput | AdOrderByWithAggregationInput[]
    by: AdScalarFieldEnum[] | AdScalarFieldEnum
    having?: AdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCountAggregateInputType | true
    _avg?: AdAvgAggregateInputType
    _sum?: AdSumAggregateInputType
    _min?: AdMinAggregateInputType
    _max?: AdMaxAggregateInputType
  }

  export type AdGroupByOutputType = {
    id: string
    advertiserId: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width: number | null
    height: number | null
    mimeType: string | null
    clickThroughURL: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdCountAggregateOutputType | null
    _avg: AdAvgAggregateOutputType | null
    _sum: AdSumAggregateOutputType | null
    _min: AdMinAggregateOutputType | null
    _max: AdMaxAggregateOutputType | null
  }

  type GetAdGroupByPayload<T extends AdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupByOutputType[P]>
        }
      >
    >


  export type AdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    adGroupId?: boolean
    type?: boolean
    url?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companionBanners?: boolean | Ad$companionBannersArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    adGroupId?: boolean
    type?: boolean
    url?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    adGroupId?: boolean
    type?: boolean
    url?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad"]>

  export type AdSelectScalar = {
    id?: boolean
    advertiserId?: boolean
    adGroupId?: boolean
    type?: boolean
    url?: boolean
    duration?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "advertiserId" | "adGroupId" | "type" | "url" | "duration" | "width" | "height" | "mimeType" | "clickThroughURL" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["ad"]>
  export type AdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companionBanners?: boolean | Ad$companionBannersArgs<ExtArgs>
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
    _count?: boolean | AdCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
  }
  export type AdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
  }

  export type $AdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ad"
    objects: {
      companionBanners: Prisma.$CompanionBannerPayload<ExtArgs>[]
      advertiser: Prisma.$AdvertiserPayload<ExtArgs>
      adGroup: Prisma.$AdGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      advertiserId: string
      adGroupId: string
      type: string
      url: string
      duration: number
      width: number | null
      height: number | null
      mimeType: string | null
      clickThroughURL: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ad"]>
    composites: {}
  }

  type AdGetPayload<S extends boolean | null | undefined | AdDefaultArgs> = $Result.GetResult<Prisma.$AdPayload, S>

  type AdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdCountAggregateInputType | true
    }

  export interface AdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ad'], meta: { name: 'Ad' } }
    /**
     * Find zero or one Ad that matches the filter.
     * @param {AdFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdFindUniqueArgs>(args: SelectSubset<T, AdFindUniqueArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdFindUniqueOrThrowArgs>(args: SelectSubset<T, AdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdFindFirstArgs>(args?: SelectSubset<T, AdFindFirstArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdFindFirstOrThrowArgs>(args?: SelectSubset<T, AdFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     * 
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adWithIdOnly = await prisma.ad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdFindManyArgs>(args?: SelectSubset<T, AdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ad.
     * @param {AdCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     * 
     */
    create<T extends AdCreateArgs>(args: SelectSubset<T, AdCreateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ads.
     * @param {AdCreateManyArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdCreateManyArgs>(args?: SelectSubset<T, AdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ads and returns the data saved in the database.
     * @param {AdCreateManyAndReturnArgs} args - Arguments to create many Ads.
     * @example
     * // Create many Ads
     * const ad = await prisma.ad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdCreateManyAndReturnArgs>(args?: SelectSubset<T, AdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ad.
     * @param {AdDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     * 
     */
    delete<T extends AdDeleteArgs>(args: SelectSubset<T, AdDeleteArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ad.
     * @param {AdUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdUpdateArgs>(args: SelectSubset<T, AdUpdateArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ads.
     * @param {AdDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdDeleteManyArgs>(args?: SelectSubset<T, AdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdUpdateManyArgs>(args: SelectSubset<T, AdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ads and returns the data updated in the database.
     * @param {AdUpdateManyAndReturnArgs} args - Arguments to update many Ads.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ads and only return the `id`
     * const adWithIdOnly = await prisma.ad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdUpdateManyAndReturnArgs>(args: SelectSubset<T, AdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ad.
     * @param {AdUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
     */
    upsert<T extends AdUpsertArgs>(args: SelectSubset<T, AdUpsertArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
    **/
    count<T extends AdCountArgs>(
      args?: Subset<T, AdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdAggregateArgs>(args: Subset<T, AdAggregateArgs>): Prisma.PrismaPromise<GetAdAggregateType<T>>

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ad model
   */
  readonly fields: AdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companionBanners<T extends Ad$companionBannersArgs<ExtArgs> = {}>(args?: Subset<T, Ad$companionBannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advertiser<T extends AdvertiserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertiserDefaultArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adGroup<T extends AdGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdGroupDefaultArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ad model
   */
  interface AdFieldRefs {
    readonly id: FieldRef<"Ad", 'String'>
    readonly advertiserId: FieldRef<"Ad", 'String'>
    readonly adGroupId: FieldRef<"Ad", 'String'>
    readonly type: FieldRef<"Ad", 'String'>
    readonly url: FieldRef<"Ad", 'String'>
    readonly duration: FieldRef<"Ad", 'Int'>
    readonly width: FieldRef<"Ad", 'Int'>
    readonly height: FieldRef<"Ad", 'Int'>
    readonly mimeType: FieldRef<"Ad", 'String'>
    readonly clickThroughURL: FieldRef<"Ad", 'String'>
    readonly description: FieldRef<"Ad", 'String'>
    readonly createdAt: FieldRef<"Ad", 'DateTime'>
    readonly updatedAt: FieldRef<"Ad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ad findUnique
   */
  export type AdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findUniqueOrThrow
   */
  export type AdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad findFirst
   */
  export type AdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findFirstOrThrow
   */
  export type AdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad findMany
   */
  export type AdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter, which Ads to fetch.
     */
    where?: AdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ads.
     */
    cursor?: AdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ads.
     */
    skip?: number
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[]
  }

  /**
   * Ad create
   */
  export type AdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to create a Ad.
     */
    data: XOR<AdCreateInput, AdUncheckedCreateInput>
  }

  /**
   * Ad createMany
   */
  export type AdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
  }

  /**
   * Ad createManyAndReturn
   */
  export type AdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ad update
   */
  export type AdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The data needed to update a Ad.
     */
    data: XOR<AdUpdateInput, AdUncheckedUpdateInput>
    /**
     * Choose, which Ad to update.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad updateMany
   */
  export type AdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
  }

  /**
   * Ad updateManyAndReturn
   */
  export type AdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ad upsert
   */
  export type AdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * The filter to search for the Ad to update in case it exists.
     */
    where: AdWhereUniqueInput
    /**
     * In case the Ad found by the `where` argument doesn't exist, create a new Ad with this data.
     */
    create: XOR<AdCreateInput, AdUncheckedCreateInput>
    /**
     * In case the Ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdUpdateInput, AdUncheckedUpdateInput>
  }

  /**
   * Ad delete
   */
  export type AdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
    /**
     * Filter which Ad to delete.
     */
    where: AdWhereUniqueInput
  }

  /**
   * Ad deleteMany
   */
  export type AdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ads to delete
     */
    where?: AdWhereInput
    /**
     * Limit how many Ads to delete.
     */
    limit?: number
  }

  /**
   * Ad.companionBanners
   */
  export type Ad$companionBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    where?: CompanionBannerWhereInput
    orderBy?: CompanionBannerOrderByWithRelationInput | CompanionBannerOrderByWithRelationInput[]
    cursor?: CompanionBannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionBannerScalarFieldEnum | CompanionBannerScalarFieldEnum[]
  }

  /**
   * Ad without action
   */
  export type AdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ad
     */
    omit?: AdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdInclude<ExtArgs> | null
  }


  /**
   * Model CompanionBanner
   */

  export type AggregateCompanionBanner = {
    _count: CompanionBannerCountAggregateOutputType | null
    _avg: CompanionBannerAvgAggregateOutputType | null
    _sum: CompanionBannerSumAggregateOutputType | null
    _min: CompanionBannerMinAggregateOutputType | null
    _max: CompanionBannerMaxAggregateOutputType | null
  }

  export type CompanionBannerAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type CompanionBannerSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type CompanionBannerMinAggregateOutputType = {
    id: string | null
    adId: string | null
    url: string | null
    width: number | null
    height: number | null
    mimeType: string | null
    clickThroughURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionBannerMaxAggregateOutputType = {
    id: string | null
    adId: string | null
    url: string | null
    width: number | null
    height: number | null
    mimeType: string | null
    clickThroughURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionBannerCountAggregateOutputType = {
    id: number
    adId: number
    url: number
    width: number
    height: number
    mimeType: number
    clickThroughURL: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanionBannerAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type CompanionBannerSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type CompanionBannerMinAggregateInputType = {
    id?: true
    adId?: true
    url?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionBannerMaxAggregateInputType = {
    id?: true
    adId?: true
    url?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionBannerCountAggregateInputType = {
    id?: true
    adId?: true
    url?: true
    width?: true
    height?: true
    mimeType?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanionBannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionBanner to aggregate.
     */
    where?: CompanionBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionBanners to fetch.
     */
    orderBy?: CompanionBannerOrderByWithRelationInput | CompanionBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanionBanners
    **/
    _count?: true | CompanionBannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanionBannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanionBannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionBannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionBannerMaxAggregateInputType
  }

  export type GetCompanionBannerAggregateType<T extends CompanionBannerAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanionBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanionBanner[P]>
      : GetScalarType<T[P], AggregateCompanionBanner[P]>
  }




  export type CompanionBannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionBannerWhereInput
    orderBy?: CompanionBannerOrderByWithAggregationInput | CompanionBannerOrderByWithAggregationInput[]
    by: CompanionBannerScalarFieldEnum[] | CompanionBannerScalarFieldEnum
    having?: CompanionBannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionBannerCountAggregateInputType | true
    _avg?: CompanionBannerAvgAggregateInputType
    _sum?: CompanionBannerSumAggregateInputType
    _min?: CompanionBannerMinAggregateInputType
    _max?: CompanionBannerMaxAggregateInputType
  }

  export type CompanionBannerGroupByOutputType = {
    id: string
    adId: string
    url: string
    width: number
    height: number
    mimeType: string | null
    clickThroughURL: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanionBannerCountAggregateOutputType | null
    _avg: CompanionBannerAvgAggregateOutputType | null
    _sum: CompanionBannerSumAggregateOutputType | null
    _min: CompanionBannerMinAggregateOutputType | null
    _max: CompanionBannerMaxAggregateOutputType | null
  }

  type GetCompanionBannerGroupByPayload<T extends CompanionBannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionBannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionBannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionBannerGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionBannerGroupByOutputType[P]>
        }
      >
    >


  export type CompanionBannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionBanner"]>

  export type CompanionBannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionBanner"]>

  export type CompanionBannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adId?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companionBanner"]>

  export type CompanionBannerSelectScalar = {
    id?: boolean
    adId?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    mimeType?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanionBannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adId" | "url" | "width" | "height" | "mimeType" | "clickThroughURL" | "createdAt" | "updatedAt", ExtArgs["result"]["companionBanner"]>
  export type CompanionBannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }
  export type CompanionBannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }
  export type CompanionBannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ad?: boolean | AdDefaultArgs<ExtArgs>
  }

  export type $CompanionBannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanionBanner"
    objects: {
      ad: Prisma.$AdPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adId: string
      url: string
      width: number
      height: number
      mimeType: string | null
      clickThroughURL: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companionBanner"]>
    composites: {}
  }

  type CompanionBannerGetPayload<S extends boolean | null | undefined | CompanionBannerDefaultArgs> = $Result.GetResult<Prisma.$CompanionBannerPayload, S>

  type CompanionBannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionBannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionBannerCountAggregateInputType | true
    }

  export interface CompanionBannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanionBanner'], meta: { name: 'CompanionBanner' } }
    /**
     * Find zero or one CompanionBanner that matches the filter.
     * @param {CompanionBannerFindUniqueArgs} args - Arguments to find a CompanionBanner
     * @example
     * // Get one CompanionBanner
     * const companionBanner = await prisma.companionBanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionBannerFindUniqueArgs>(args: SelectSubset<T, CompanionBannerFindUniqueArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanionBanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionBannerFindUniqueOrThrowArgs} args - Arguments to find a CompanionBanner
     * @example
     * // Get one CompanionBanner
     * const companionBanner = await prisma.companionBanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionBannerFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionBannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionBanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerFindFirstArgs} args - Arguments to find a CompanionBanner
     * @example
     * // Get one CompanionBanner
     * const companionBanner = await prisma.companionBanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionBannerFindFirstArgs>(args?: SelectSubset<T, CompanionBannerFindFirstArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanionBanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerFindFirstOrThrowArgs} args - Arguments to find a CompanionBanner
     * @example
     * // Get one CompanionBanner
     * const companionBanner = await prisma.companionBanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionBannerFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionBannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanionBanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanionBanners
     * const companionBanners = await prisma.companionBanner.findMany()
     * 
     * // Get first 10 CompanionBanners
     * const companionBanners = await prisma.companionBanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionBannerWithIdOnly = await prisma.companionBanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionBannerFindManyArgs>(args?: SelectSubset<T, CompanionBannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanionBanner.
     * @param {CompanionBannerCreateArgs} args - Arguments to create a CompanionBanner.
     * @example
     * // Create one CompanionBanner
     * const CompanionBanner = await prisma.companionBanner.create({
     *   data: {
     *     // ... data to create a CompanionBanner
     *   }
     * })
     * 
     */
    create<T extends CompanionBannerCreateArgs>(args: SelectSubset<T, CompanionBannerCreateArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanionBanners.
     * @param {CompanionBannerCreateManyArgs} args - Arguments to create many CompanionBanners.
     * @example
     * // Create many CompanionBanners
     * const companionBanner = await prisma.companionBanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionBannerCreateManyArgs>(args?: SelectSubset<T, CompanionBannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanionBanners and returns the data saved in the database.
     * @param {CompanionBannerCreateManyAndReturnArgs} args - Arguments to create many CompanionBanners.
     * @example
     * // Create many CompanionBanners
     * const companionBanner = await prisma.companionBanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanionBanners and only return the `id`
     * const companionBannerWithIdOnly = await prisma.companionBanner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanionBannerCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanionBannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanionBanner.
     * @param {CompanionBannerDeleteArgs} args - Arguments to delete one CompanionBanner.
     * @example
     * // Delete one CompanionBanner
     * const CompanionBanner = await prisma.companionBanner.delete({
     *   where: {
     *     // ... filter to delete one CompanionBanner
     *   }
     * })
     * 
     */
    delete<T extends CompanionBannerDeleteArgs>(args: SelectSubset<T, CompanionBannerDeleteArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanionBanner.
     * @param {CompanionBannerUpdateArgs} args - Arguments to update one CompanionBanner.
     * @example
     * // Update one CompanionBanner
     * const companionBanner = await prisma.companionBanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionBannerUpdateArgs>(args: SelectSubset<T, CompanionBannerUpdateArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanionBanners.
     * @param {CompanionBannerDeleteManyArgs} args - Arguments to filter CompanionBanners to delete.
     * @example
     * // Delete a few CompanionBanners
     * const { count } = await prisma.companionBanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionBannerDeleteManyArgs>(args?: SelectSubset<T, CompanionBannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanionBanners
     * const companionBanner = await prisma.companionBanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionBannerUpdateManyArgs>(args: SelectSubset<T, CompanionBannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanionBanners and returns the data updated in the database.
     * @param {CompanionBannerUpdateManyAndReturnArgs} args - Arguments to update many CompanionBanners.
     * @example
     * // Update many CompanionBanners
     * const companionBanner = await prisma.companionBanner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanionBanners and only return the `id`
     * const companionBannerWithIdOnly = await prisma.companionBanner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanionBannerUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanionBannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanionBanner.
     * @param {CompanionBannerUpsertArgs} args - Arguments to update or create a CompanionBanner.
     * @example
     * // Update or create a CompanionBanner
     * const companionBanner = await prisma.companionBanner.upsert({
     *   create: {
     *     // ... data to create a CompanionBanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanionBanner we want to update
     *   }
     * })
     */
    upsert<T extends CompanionBannerUpsertArgs>(args: SelectSubset<T, CompanionBannerUpsertArgs<ExtArgs>>): Prisma__CompanionBannerClient<$Result.GetResult<Prisma.$CompanionBannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanionBanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerCountArgs} args - Arguments to filter CompanionBanners to count.
     * @example
     * // Count the number of CompanionBanners
     * const count = await prisma.companionBanner.count({
     *   where: {
     *     // ... the filter for the CompanionBanners we want to count
     *   }
     * })
    **/
    count<T extends CompanionBannerCountArgs>(
      args?: Subset<T, CompanionBannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionBannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanionBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanionBannerAggregateArgs>(args: Subset<T, CompanionBannerAggregateArgs>): Prisma.PrismaPromise<GetCompanionBannerAggregateType<T>>

    /**
     * Group by CompanionBanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionBannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanionBannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionBannerGroupByArgs['orderBy'] }
        : { orderBy?: CompanionBannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanionBannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanionBanner model
   */
  readonly fields: CompanionBannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanionBanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionBannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ad<T extends AdDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdDefaultArgs<ExtArgs>>): Prisma__AdClient<$Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanionBanner model
   */
  interface CompanionBannerFieldRefs {
    readonly id: FieldRef<"CompanionBanner", 'String'>
    readonly adId: FieldRef<"CompanionBanner", 'String'>
    readonly url: FieldRef<"CompanionBanner", 'String'>
    readonly width: FieldRef<"CompanionBanner", 'Int'>
    readonly height: FieldRef<"CompanionBanner", 'Int'>
    readonly mimeType: FieldRef<"CompanionBanner", 'String'>
    readonly clickThroughURL: FieldRef<"CompanionBanner", 'String'>
    readonly createdAt: FieldRef<"CompanionBanner", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanionBanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanionBanner findUnique
   */
  export type CompanionBannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter, which CompanionBanner to fetch.
     */
    where: CompanionBannerWhereUniqueInput
  }

  /**
   * CompanionBanner findUniqueOrThrow
   */
  export type CompanionBannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter, which CompanionBanner to fetch.
     */
    where: CompanionBannerWhereUniqueInput
  }

  /**
   * CompanionBanner findFirst
   */
  export type CompanionBannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter, which CompanionBanner to fetch.
     */
    where?: CompanionBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionBanners to fetch.
     */
    orderBy?: CompanionBannerOrderByWithRelationInput | CompanionBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionBanners.
     */
    cursor?: CompanionBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionBanners.
     */
    distinct?: CompanionBannerScalarFieldEnum | CompanionBannerScalarFieldEnum[]
  }

  /**
   * CompanionBanner findFirstOrThrow
   */
  export type CompanionBannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter, which CompanionBanner to fetch.
     */
    where?: CompanionBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionBanners to fetch.
     */
    orderBy?: CompanionBannerOrderByWithRelationInput | CompanionBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanionBanners.
     */
    cursor?: CompanionBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionBanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanionBanners.
     */
    distinct?: CompanionBannerScalarFieldEnum | CompanionBannerScalarFieldEnum[]
  }

  /**
   * CompanionBanner findMany
   */
  export type CompanionBannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter, which CompanionBanners to fetch.
     */
    where?: CompanionBannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanionBanners to fetch.
     */
    orderBy?: CompanionBannerOrderByWithRelationInput | CompanionBannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanionBanners.
     */
    cursor?: CompanionBannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanionBanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanionBanners.
     */
    skip?: number
    distinct?: CompanionBannerScalarFieldEnum | CompanionBannerScalarFieldEnum[]
  }

  /**
   * CompanionBanner create
   */
  export type CompanionBannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanionBanner.
     */
    data: XOR<CompanionBannerCreateInput, CompanionBannerUncheckedCreateInput>
  }

  /**
   * CompanionBanner createMany
   */
  export type CompanionBannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanionBanners.
     */
    data: CompanionBannerCreateManyInput | CompanionBannerCreateManyInput[]
  }

  /**
   * CompanionBanner createManyAndReturn
   */
  export type CompanionBannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * The data used to create many CompanionBanners.
     */
    data: CompanionBannerCreateManyInput | CompanionBannerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionBanner update
   */
  export type CompanionBannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanionBanner.
     */
    data: XOR<CompanionBannerUpdateInput, CompanionBannerUncheckedUpdateInput>
    /**
     * Choose, which CompanionBanner to update.
     */
    where: CompanionBannerWhereUniqueInput
  }

  /**
   * CompanionBanner updateMany
   */
  export type CompanionBannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanionBanners.
     */
    data: XOR<CompanionBannerUpdateManyMutationInput, CompanionBannerUncheckedUpdateManyInput>
    /**
     * Filter which CompanionBanners to update
     */
    where?: CompanionBannerWhereInput
    /**
     * Limit how many CompanionBanners to update.
     */
    limit?: number
  }

  /**
   * CompanionBanner updateManyAndReturn
   */
  export type CompanionBannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * The data used to update CompanionBanners.
     */
    data: XOR<CompanionBannerUpdateManyMutationInput, CompanionBannerUncheckedUpdateManyInput>
    /**
     * Filter which CompanionBanners to update
     */
    where?: CompanionBannerWhereInput
    /**
     * Limit how many CompanionBanners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanionBanner upsert
   */
  export type CompanionBannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanionBanner to update in case it exists.
     */
    where: CompanionBannerWhereUniqueInput
    /**
     * In case the CompanionBanner found by the `where` argument doesn't exist, create a new CompanionBanner with this data.
     */
    create: XOR<CompanionBannerCreateInput, CompanionBannerUncheckedCreateInput>
    /**
     * In case the CompanionBanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionBannerUpdateInput, CompanionBannerUncheckedUpdateInput>
  }

  /**
   * CompanionBanner delete
   */
  export type CompanionBannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
    /**
     * Filter which CompanionBanner to delete.
     */
    where: CompanionBannerWhereUniqueInput
  }

  /**
   * CompanionBanner deleteMany
   */
  export type CompanionBannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanionBanners to delete
     */
    where?: CompanionBannerWhereInput
    /**
     * Limit how many CompanionBanners to delete.
     */
    limit?: number
  }

  /**
   * CompanionBanner without action
   */
  export type CompanionBannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanionBanner
     */
    select?: CompanionBannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanionBanner
     */
    omit?: CompanionBannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionBannerInclude<ExtArgs> | null
  }


  /**
   * Model Click
   */

  export type AggregateClick = {
    _count: ClickCountAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  export type ClickMinAggregateOutputType = {
    id: string | null
    adSlotId: string | null
    mediaId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    timestamp: Date | null
    ipAddress: string | null
    userAgent: string | null
    isCompanion: boolean | null
    impressionId: string | null
    uid: string | null
    clickThroughURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClickMaxAggregateOutputType = {
    id: string | null
    adSlotId: string | null
    mediaId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    timestamp: Date | null
    ipAddress: string | null
    userAgent: string | null
    isCompanion: boolean | null
    impressionId: string | null
    uid: string | null
    clickThroughURL: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClickCountAggregateOutputType = {
    id: number
    adSlotId: number
    mediaId: number
    advertiserId: number
    campaignId: number
    adGroupId: number
    adId: number
    timestamp: number
    ipAddress: number
    userAgent: number
    isCompanion: number
    impressionId: number
    uid: number
    clickThroughURL: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClickMinAggregateInputType = {
    id?: true
    adSlotId?: true
    mediaId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    isCompanion?: true
    impressionId?: true
    uid?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClickMaxAggregateInputType = {
    id?: true
    adSlotId?: true
    mediaId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    isCompanion?: true
    impressionId?: true
    uid?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClickCountAggregateInputType = {
    id?: true
    adSlotId?: true
    mediaId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    timestamp?: true
    ipAddress?: true
    userAgent?: true
    isCompanion?: true
    impressionId?: true
    uid?: true
    clickThroughURL?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Click to aggregate.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClickOrderByWithRelationInput | ClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clicks
    **/
    _count?: true | ClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickMaxAggregateInputType
  }

  export type GetClickAggregateType<T extends ClickAggregateArgs> = {
        [P in keyof T & keyof AggregateClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClick[P]>
      : GetScalarType<T[P], AggregateClick[P]>
  }




  export type ClickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickWhereInput
    orderBy?: ClickOrderByWithAggregationInput | ClickOrderByWithAggregationInput[]
    by: ClickScalarFieldEnum[] | ClickScalarFieldEnum
    having?: ClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickCountAggregateInputType | true
    _min?: ClickMinAggregateInputType
    _max?: ClickMaxAggregateInputType
  }

  export type ClickGroupByOutputType = {
    id: string
    adSlotId: string
    mediaId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    timestamp: Date
    ipAddress: string
    userAgent: string
    isCompanion: boolean
    impressionId: string
    uid: string
    clickThroughURL: string
    createdAt: Date
    updatedAt: Date
    _count: ClickCountAggregateOutputType | null
    _min: ClickMinAggregateOutputType | null
    _max: ClickMaxAggregateOutputType | null
  }

  type GetClickGroupByPayload<T extends ClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickGroupByOutputType[P]>
            : GetScalarType<T[P], ClickGroupByOutputType[P]>
        }
      >
    >


  export type ClickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adSlotId?: boolean
    mediaId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isCompanion?: boolean
    impressionId?: boolean
    uid?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["click"]>

  export type ClickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adSlotId?: boolean
    mediaId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isCompanion?: boolean
    impressionId?: boolean
    uid?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["click"]>

  export type ClickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adSlotId?: boolean
    mediaId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isCompanion?: boolean
    impressionId?: boolean
    uid?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["click"]>

  export type ClickSelectScalar = {
    id?: boolean
    adSlotId?: boolean
    mediaId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    timestamp?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isCompanion?: boolean
    impressionId?: boolean
    uid?: boolean
    clickThroughURL?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adSlotId" | "mediaId" | "advertiserId" | "campaignId" | "adGroupId" | "adId" | "timestamp" | "ipAddress" | "userAgent" | "isCompanion" | "impressionId" | "uid" | "clickThroughURL" | "createdAt" | "updatedAt", ExtArgs["result"]["click"]>

  export type $ClickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Click"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adSlotId: string
      mediaId: string
      advertiserId: string
      campaignId: string
      adGroupId: string
      adId: string
      timestamp: Date
      ipAddress: string
      userAgent: string
      isCompanion: boolean
      impressionId: string
      uid: string
      clickThroughURL: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["click"]>
    composites: {}
  }

  type ClickGetPayload<S extends boolean | null | undefined | ClickDefaultArgs> = $Result.GetResult<Prisma.$ClickPayload, S>

  type ClickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClickCountAggregateInputType | true
    }

  export interface ClickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Click'], meta: { name: 'Click' } }
    /**
     * Find zero or one Click that matches the filter.
     * @param {ClickFindUniqueArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClickFindUniqueArgs>(args: SelectSubset<T, ClickFindUniqueArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Click that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClickFindUniqueOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClickFindUniqueOrThrowArgs>(args: SelectSubset<T, ClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Click that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClickFindFirstArgs>(args?: SelectSubset<T, ClickFindFirstArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Click that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindFirstOrThrowArgs} args - Arguments to find a Click
     * @example
     * // Get one Click
     * const click = await prisma.click.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClickFindFirstOrThrowArgs>(args?: SelectSubset<T, ClickFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clicks
     * const clicks = await prisma.click.findMany()
     * 
     * // Get first 10 Clicks
     * const clicks = await prisma.click.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickWithIdOnly = await prisma.click.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClickFindManyArgs>(args?: SelectSubset<T, ClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Click.
     * @param {ClickCreateArgs} args - Arguments to create a Click.
     * @example
     * // Create one Click
     * const Click = await prisma.click.create({
     *   data: {
     *     // ... data to create a Click
     *   }
     * })
     * 
     */
    create<T extends ClickCreateArgs>(args: SelectSubset<T, ClickCreateArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clicks.
     * @param {ClickCreateManyArgs} args - Arguments to create many Clicks.
     * @example
     * // Create many Clicks
     * const click = await prisma.click.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClickCreateManyArgs>(args?: SelectSubset<T, ClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clicks and returns the data saved in the database.
     * @param {ClickCreateManyAndReturnArgs} args - Arguments to create many Clicks.
     * @example
     * // Create many Clicks
     * const click = await prisma.click.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clicks and only return the `id`
     * const clickWithIdOnly = await prisma.click.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClickCreateManyAndReturnArgs>(args?: SelectSubset<T, ClickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Click.
     * @param {ClickDeleteArgs} args - Arguments to delete one Click.
     * @example
     * // Delete one Click
     * const Click = await prisma.click.delete({
     *   where: {
     *     // ... filter to delete one Click
     *   }
     * })
     * 
     */
    delete<T extends ClickDeleteArgs>(args: SelectSubset<T, ClickDeleteArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Click.
     * @param {ClickUpdateArgs} args - Arguments to update one Click.
     * @example
     * // Update one Click
     * const click = await prisma.click.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClickUpdateArgs>(args: SelectSubset<T, ClickUpdateArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clicks.
     * @param {ClickDeleteManyArgs} args - Arguments to filter Clicks to delete.
     * @example
     * // Delete a few Clicks
     * const { count } = await prisma.click.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClickDeleteManyArgs>(args?: SelectSubset<T, ClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clicks
     * const click = await prisma.click.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClickUpdateManyArgs>(args: SelectSubset<T, ClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clicks and returns the data updated in the database.
     * @param {ClickUpdateManyAndReturnArgs} args - Arguments to update many Clicks.
     * @example
     * // Update many Clicks
     * const click = await prisma.click.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clicks and only return the `id`
     * const clickWithIdOnly = await prisma.click.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClickUpdateManyAndReturnArgs>(args: SelectSubset<T, ClickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Click.
     * @param {ClickUpsertArgs} args - Arguments to update or create a Click.
     * @example
     * // Update or create a Click
     * const click = await prisma.click.upsert({
     *   create: {
     *     // ... data to create a Click
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Click we want to update
     *   }
     * })
     */
    upsert<T extends ClickUpsertArgs>(args: SelectSubset<T, ClickUpsertArgs<ExtArgs>>): Prisma__ClickClient<$Result.GetResult<Prisma.$ClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickCountArgs} args - Arguments to filter Clicks to count.
     * @example
     * // Count the number of Clicks
     * const count = await prisma.click.count({
     *   where: {
     *     // ... the filter for the Clicks we want to count
     *   }
     * })
    **/
    count<T extends ClickCountArgs>(
      args?: Subset<T, ClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickAggregateArgs>(args: Subset<T, ClickAggregateArgs>): Prisma.PrismaPromise<GetClickAggregateType<T>>

    /**
     * Group by Click.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickGroupByArgs['orderBy'] }
        : { orderBy?: ClickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Click model
   */
  readonly fields: ClickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Click.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Click model
   */
  interface ClickFieldRefs {
    readonly id: FieldRef<"Click", 'String'>
    readonly adSlotId: FieldRef<"Click", 'String'>
    readonly mediaId: FieldRef<"Click", 'String'>
    readonly advertiserId: FieldRef<"Click", 'String'>
    readonly campaignId: FieldRef<"Click", 'String'>
    readonly adGroupId: FieldRef<"Click", 'String'>
    readonly adId: FieldRef<"Click", 'String'>
    readonly timestamp: FieldRef<"Click", 'DateTime'>
    readonly ipAddress: FieldRef<"Click", 'String'>
    readonly userAgent: FieldRef<"Click", 'String'>
    readonly isCompanion: FieldRef<"Click", 'Boolean'>
    readonly impressionId: FieldRef<"Click", 'String'>
    readonly uid: FieldRef<"Click", 'String'>
    readonly clickThroughURL: FieldRef<"Click", 'String'>
    readonly createdAt: FieldRef<"Click", 'DateTime'>
    readonly updatedAt: FieldRef<"Click", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Click findUnique
   */
  export type ClickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where: ClickWhereUniqueInput
  }

  /**
   * Click findUniqueOrThrow
   */
  export type ClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where: ClickWhereUniqueInput
  }

  /**
   * Click findFirst
   */
  export type ClickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClickOrderByWithRelationInput | ClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: ClickScalarFieldEnum | ClickScalarFieldEnum[]
  }

  /**
   * Click findFirstOrThrow
   */
  export type ClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter, which Click to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClickOrderByWithRelationInput | ClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clicks.
     */
    distinct?: ClickScalarFieldEnum | ClickScalarFieldEnum[]
  }

  /**
   * Click findMany
   */
  export type ClickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter, which Clicks to fetch.
     */
    where?: ClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clicks to fetch.
     */
    orderBy?: ClickOrderByWithRelationInput | ClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clicks.
     */
    cursor?: ClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clicks.
     */
    skip?: number
    distinct?: ClickScalarFieldEnum | ClickScalarFieldEnum[]
  }

  /**
   * Click create
   */
  export type ClickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * The data needed to create a Click.
     */
    data: XOR<ClickCreateInput, ClickUncheckedCreateInput>
  }

  /**
   * Click createMany
   */
  export type ClickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clicks.
     */
    data: ClickCreateManyInput | ClickCreateManyInput[]
  }

  /**
   * Click createManyAndReturn
   */
  export type ClickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * The data used to create many Clicks.
     */
    data: ClickCreateManyInput | ClickCreateManyInput[]
  }

  /**
   * Click update
   */
  export type ClickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * The data needed to update a Click.
     */
    data: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
    /**
     * Choose, which Click to update.
     */
    where: ClickWhereUniqueInput
  }

  /**
   * Click updateMany
   */
  export type ClickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clicks.
     */
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     */
    where?: ClickWhereInput
    /**
     * Limit how many Clicks to update.
     */
    limit?: number
  }

  /**
   * Click updateManyAndReturn
   */
  export type ClickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * The data used to update Clicks.
     */
    data: XOR<ClickUpdateManyMutationInput, ClickUncheckedUpdateManyInput>
    /**
     * Filter which Clicks to update
     */
    where?: ClickWhereInput
    /**
     * Limit how many Clicks to update.
     */
    limit?: number
  }

  /**
   * Click upsert
   */
  export type ClickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * The filter to search for the Click to update in case it exists.
     */
    where: ClickWhereUniqueInput
    /**
     * In case the Click found by the `where` argument doesn't exist, create a new Click with this data.
     */
    create: XOR<ClickCreateInput, ClickUncheckedCreateInput>
    /**
     * In case the Click was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickUpdateInput, ClickUncheckedUpdateInput>
  }

  /**
   * Click delete
   */
  export type ClickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
    /**
     * Filter which Click to delete.
     */
    where: ClickWhereUniqueInput
  }

  /**
   * Click deleteMany
   */
  export type ClickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clicks to delete
     */
    where?: ClickWhereInput
    /**
     * Limit how many Clicks to delete.
     */
    limit?: number
  }

  /**
   * Click without action
   */
  export type ClickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Click
     */
    select?: ClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Click
     */
    omit?: ClickOmit<ExtArgs> | null
  }


  /**
   * Model AdEvent
   */

  export type AggregateAdEvent = {
    _count: AdEventCountAggregateOutputType | null
    _avg: AdEventAvgAggregateOutputType | null
    _sum: AdEventSumAggregateOutputType | null
    _min: AdEventMinAggregateOutputType | null
    _max: AdEventMaxAggregateOutputType | null
  }

  export type AdEventAvgAggregateOutputType = {
    progress: number | null
  }

  export type AdEventSumAggregateOutputType = {
    progress: number | null
  }

  export type AdEventMinAggregateOutputType = {
    id: string | null
    eventTimestamp: Date | null
    eventType: string | null
    mediaId: string | null
    adSlotId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    impressionId: string | null
    progress: number | null
    ipAddress: string | null
    userAgent: string | null
    uid: string | null
  }

  export type AdEventMaxAggregateOutputType = {
    id: string | null
    eventTimestamp: Date | null
    eventType: string | null
    mediaId: string | null
    adSlotId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    impressionId: string | null
    progress: number | null
    ipAddress: string | null
    userAgent: string | null
    uid: string | null
  }

  export type AdEventCountAggregateOutputType = {
    id: number
    eventTimestamp: number
    eventType: number
    mediaId: number
    adSlotId: number
    advertiserId: number
    campaignId: number
    adGroupId: number
    adId: number
    impressionId: number
    progress: number
    ipAddress: number
    userAgent: number
    uid: number
    _all: number
  }


  export type AdEventAvgAggregateInputType = {
    progress?: true
  }

  export type AdEventSumAggregateInputType = {
    progress?: true
  }

  export type AdEventMinAggregateInputType = {
    id?: true
    eventTimestamp?: true
    eventType?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressionId?: true
    progress?: true
    ipAddress?: true
    userAgent?: true
    uid?: true
  }

  export type AdEventMaxAggregateInputType = {
    id?: true
    eventTimestamp?: true
    eventType?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressionId?: true
    progress?: true
    ipAddress?: true
    userAgent?: true
    uid?: true
  }

  export type AdEventCountAggregateInputType = {
    id?: true
    eventTimestamp?: true
    eventType?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressionId?: true
    progress?: true
    ipAddress?: true
    userAgent?: true
    uid?: true
    _all?: true
  }

  export type AdEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdEvent to aggregate.
     */
    where?: AdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdEvents to fetch.
     */
    orderBy?: AdEventOrderByWithRelationInput | AdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdEvents
    **/
    _count?: true | AdEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdEventMaxAggregateInputType
  }

  export type GetAdEventAggregateType<T extends AdEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAdEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdEvent[P]>
      : GetScalarType<T[P], AggregateAdEvent[P]>
  }




  export type AdEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdEventWhereInput
    orderBy?: AdEventOrderByWithAggregationInput | AdEventOrderByWithAggregationInput[]
    by: AdEventScalarFieldEnum[] | AdEventScalarFieldEnum
    having?: AdEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdEventCountAggregateInputType | true
    _avg?: AdEventAvgAggregateInputType
    _sum?: AdEventSumAggregateInputType
    _min?: AdEventMinAggregateInputType
    _max?: AdEventMaxAggregateInputType
  }

  export type AdEventGroupByOutputType = {
    id: string
    eventTimestamp: Date
    eventType: string
    mediaId: string | null
    adSlotId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    impressionId: string | null
    progress: number | null
    ipAddress: string
    userAgent: string
    uid: string
    _count: AdEventCountAggregateOutputType | null
    _avg: AdEventAvgAggregateOutputType | null
    _sum: AdEventSumAggregateOutputType | null
    _min: AdEventMinAggregateOutputType | null
    _max: AdEventMaxAggregateOutputType | null
  }

  type GetAdEventGroupByPayload<T extends AdEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdEventGroupByOutputType[P]>
            : GetScalarType<T[P], AdEventGroupByOutputType[P]>
        }
      >
    >


  export type AdEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTimestamp?: boolean
    eventType?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressionId?: boolean
    progress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    uid?: boolean
  }, ExtArgs["result"]["adEvent"]>

  export type AdEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTimestamp?: boolean
    eventType?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressionId?: boolean
    progress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    uid?: boolean
  }, ExtArgs["result"]["adEvent"]>

  export type AdEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTimestamp?: boolean
    eventType?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressionId?: boolean
    progress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    uid?: boolean
  }, ExtArgs["result"]["adEvent"]>

  export type AdEventSelectScalar = {
    id?: boolean
    eventTimestamp?: boolean
    eventType?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressionId?: boolean
    progress?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    uid?: boolean
  }

  export type AdEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventTimestamp" | "eventType" | "mediaId" | "adSlotId" | "advertiserId" | "campaignId" | "adGroupId" | "adId" | "impressionId" | "progress" | "ipAddress" | "userAgent" | "uid", ExtArgs["result"]["adEvent"]>

  export type $AdEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTimestamp: Date
      eventType: string
      mediaId: string | null
      adSlotId: string | null
      advertiserId: string | null
      campaignId: string | null
      adGroupId: string | null
      adId: string | null
      impressionId: string | null
      progress: number | null
      ipAddress: string
      userAgent: string
      uid: string
    }, ExtArgs["result"]["adEvent"]>
    composites: {}
  }

  type AdEventGetPayload<S extends boolean | null | undefined | AdEventDefaultArgs> = $Result.GetResult<Prisma.$AdEventPayload, S>

  type AdEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdEventCountAggregateInputType | true
    }

  export interface AdEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdEvent'], meta: { name: 'AdEvent' } }
    /**
     * Find zero or one AdEvent that matches the filter.
     * @param {AdEventFindUniqueArgs} args - Arguments to find a AdEvent
     * @example
     * // Get one AdEvent
     * const adEvent = await prisma.adEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdEventFindUniqueArgs>(args: SelectSubset<T, AdEventFindUniqueArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdEventFindUniqueOrThrowArgs} args - Arguments to find a AdEvent
     * @example
     * // Get one AdEvent
     * const adEvent = await prisma.adEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AdEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventFindFirstArgs} args - Arguments to find a AdEvent
     * @example
     * // Get one AdEvent
     * const adEvent = await prisma.adEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdEventFindFirstArgs>(args?: SelectSubset<T, AdEventFindFirstArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventFindFirstOrThrowArgs} args - Arguments to find a AdEvent
     * @example
     * // Get one AdEvent
     * const adEvent = await prisma.adEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AdEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdEvents
     * const adEvents = await prisma.adEvent.findMany()
     * 
     * // Get first 10 AdEvents
     * const adEvents = await prisma.adEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adEventWithIdOnly = await prisma.adEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdEventFindManyArgs>(args?: SelectSubset<T, AdEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdEvent.
     * @param {AdEventCreateArgs} args - Arguments to create a AdEvent.
     * @example
     * // Create one AdEvent
     * const AdEvent = await prisma.adEvent.create({
     *   data: {
     *     // ... data to create a AdEvent
     *   }
     * })
     * 
     */
    create<T extends AdEventCreateArgs>(args: SelectSubset<T, AdEventCreateArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdEvents.
     * @param {AdEventCreateManyArgs} args - Arguments to create many AdEvents.
     * @example
     * // Create many AdEvents
     * const adEvent = await prisma.adEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdEventCreateManyArgs>(args?: SelectSubset<T, AdEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdEvents and returns the data saved in the database.
     * @param {AdEventCreateManyAndReturnArgs} args - Arguments to create many AdEvents.
     * @example
     * // Create many AdEvents
     * const adEvent = await prisma.adEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdEvents and only return the `id`
     * const adEventWithIdOnly = await prisma.adEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AdEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdEvent.
     * @param {AdEventDeleteArgs} args - Arguments to delete one AdEvent.
     * @example
     * // Delete one AdEvent
     * const AdEvent = await prisma.adEvent.delete({
     *   where: {
     *     // ... filter to delete one AdEvent
     *   }
     * })
     * 
     */
    delete<T extends AdEventDeleteArgs>(args: SelectSubset<T, AdEventDeleteArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdEvent.
     * @param {AdEventUpdateArgs} args - Arguments to update one AdEvent.
     * @example
     * // Update one AdEvent
     * const adEvent = await prisma.adEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdEventUpdateArgs>(args: SelectSubset<T, AdEventUpdateArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdEvents.
     * @param {AdEventDeleteManyArgs} args - Arguments to filter AdEvents to delete.
     * @example
     * // Delete a few AdEvents
     * const { count } = await prisma.adEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdEventDeleteManyArgs>(args?: SelectSubset<T, AdEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdEvents
     * const adEvent = await prisma.adEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdEventUpdateManyArgs>(args: SelectSubset<T, AdEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdEvents and returns the data updated in the database.
     * @param {AdEventUpdateManyAndReturnArgs} args - Arguments to update many AdEvents.
     * @example
     * // Update many AdEvents
     * const adEvent = await prisma.adEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdEvents and only return the `id`
     * const adEventWithIdOnly = await prisma.adEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AdEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdEvent.
     * @param {AdEventUpsertArgs} args - Arguments to update or create a AdEvent.
     * @example
     * // Update or create a AdEvent
     * const adEvent = await prisma.adEvent.upsert({
     *   create: {
     *     // ... data to create a AdEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdEvent we want to update
     *   }
     * })
     */
    upsert<T extends AdEventUpsertArgs>(args: SelectSubset<T, AdEventUpsertArgs<ExtArgs>>): Prisma__AdEventClient<$Result.GetResult<Prisma.$AdEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventCountArgs} args - Arguments to filter AdEvents to count.
     * @example
     * // Count the number of AdEvents
     * const count = await prisma.adEvent.count({
     *   where: {
     *     // ... the filter for the AdEvents we want to count
     *   }
     * })
    **/
    count<T extends AdEventCountArgs>(
      args?: Subset<T, AdEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdEventAggregateArgs>(args: Subset<T, AdEventAggregateArgs>): Prisma.PrismaPromise<GetAdEventAggregateType<T>>

    /**
     * Group by AdEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdEventGroupByArgs['orderBy'] }
        : { orderBy?: AdEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdEvent model
   */
  readonly fields: AdEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdEvent model
   */
  interface AdEventFieldRefs {
    readonly id: FieldRef<"AdEvent", 'String'>
    readonly eventTimestamp: FieldRef<"AdEvent", 'DateTime'>
    readonly eventType: FieldRef<"AdEvent", 'String'>
    readonly mediaId: FieldRef<"AdEvent", 'String'>
    readonly adSlotId: FieldRef<"AdEvent", 'String'>
    readonly advertiserId: FieldRef<"AdEvent", 'String'>
    readonly campaignId: FieldRef<"AdEvent", 'String'>
    readonly adGroupId: FieldRef<"AdEvent", 'String'>
    readonly adId: FieldRef<"AdEvent", 'String'>
    readonly impressionId: FieldRef<"AdEvent", 'String'>
    readonly progress: FieldRef<"AdEvent", 'Int'>
    readonly ipAddress: FieldRef<"AdEvent", 'String'>
    readonly userAgent: FieldRef<"AdEvent", 'String'>
    readonly uid: FieldRef<"AdEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdEvent findUnique
   */
  export type AdEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter, which AdEvent to fetch.
     */
    where: AdEventWhereUniqueInput
  }

  /**
   * AdEvent findUniqueOrThrow
   */
  export type AdEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter, which AdEvent to fetch.
     */
    where: AdEventWhereUniqueInput
  }

  /**
   * AdEvent findFirst
   */
  export type AdEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter, which AdEvent to fetch.
     */
    where?: AdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdEvents to fetch.
     */
    orderBy?: AdEventOrderByWithRelationInput | AdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdEvents.
     */
    cursor?: AdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdEvents.
     */
    distinct?: AdEventScalarFieldEnum | AdEventScalarFieldEnum[]
  }

  /**
   * AdEvent findFirstOrThrow
   */
  export type AdEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter, which AdEvent to fetch.
     */
    where?: AdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdEvents to fetch.
     */
    orderBy?: AdEventOrderByWithRelationInput | AdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdEvents.
     */
    cursor?: AdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdEvents.
     */
    distinct?: AdEventScalarFieldEnum | AdEventScalarFieldEnum[]
  }

  /**
   * AdEvent findMany
   */
  export type AdEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter, which AdEvents to fetch.
     */
    where?: AdEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdEvents to fetch.
     */
    orderBy?: AdEventOrderByWithRelationInput | AdEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdEvents.
     */
    cursor?: AdEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdEvents.
     */
    skip?: number
    distinct?: AdEventScalarFieldEnum | AdEventScalarFieldEnum[]
  }

  /**
   * AdEvent create
   */
  export type AdEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AdEvent.
     */
    data: XOR<AdEventCreateInput, AdEventUncheckedCreateInput>
  }

  /**
   * AdEvent createMany
   */
  export type AdEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdEvents.
     */
    data: AdEventCreateManyInput | AdEventCreateManyInput[]
  }

  /**
   * AdEvent createManyAndReturn
   */
  export type AdEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * The data used to create many AdEvents.
     */
    data: AdEventCreateManyInput | AdEventCreateManyInput[]
  }

  /**
   * AdEvent update
   */
  export type AdEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AdEvent.
     */
    data: XOR<AdEventUpdateInput, AdEventUncheckedUpdateInput>
    /**
     * Choose, which AdEvent to update.
     */
    where: AdEventWhereUniqueInput
  }

  /**
   * AdEvent updateMany
   */
  export type AdEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdEvents.
     */
    data: XOR<AdEventUpdateManyMutationInput, AdEventUncheckedUpdateManyInput>
    /**
     * Filter which AdEvents to update
     */
    where?: AdEventWhereInput
    /**
     * Limit how many AdEvents to update.
     */
    limit?: number
  }

  /**
   * AdEvent updateManyAndReturn
   */
  export type AdEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * The data used to update AdEvents.
     */
    data: XOR<AdEventUpdateManyMutationInput, AdEventUncheckedUpdateManyInput>
    /**
     * Filter which AdEvents to update
     */
    where?: AdEventWhereInput
    /**
     * Limit how many AdEvents to update.
     */
    limit?: number
  }

  /**
   * AdEvent upsert
   */
  export type AdEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AdEvent to update in case it exists.
     */
    where: AdEventWhereUniqueInput
    /**
     * In case the AdEvent found by the `where` argument doesn't exist, create a new AdEvent with this data.
     */
    create: XOR<AdEventCreateInput, AdEventUncheckedCreateInput>
    /**
     * In case the AdEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdEventUpdateInput, AdEventUncheckedUpdateInput>
  }

  /**
   * AdEvent delete
   */
  export type AdEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
    /**
     * Filter which AdEvent to delete.
     */
    where: AdEventWhereUniqueInput
  }

  /**
   * AdEvent deleteMany
   */
  export type AdEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdEvents to delete
     */
    where?: AdEventWhereInput
    /**
     * Limit how many AdEvents to delete.
     */
    limit?: number
  }

  /**
   * AdEvent without action
   */
  export type AdEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdEvent
     */
    select?: AdEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdEvent
     */
    omit?: AdEventOmit<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    impressions: number | null
    clicks: number | null
    reach: number | null
  }

  export type DailyReportSumAggregateOutputType = {
    impressions: number | null
    clicks: number | null
    reach: number | null
  }

  export type DailyReportMinAggregateOutputType = {
    date: Date | null
    mediaId: string | null
    adSlotId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    impressions: number | null
    clicks: number | null
    reach: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReportMaxAggregateOutputType = {
    date: Date | null
    mediaId: string | null
    adSlotId: string | null
    advertiserId: string | null
    campaignId: string | null
    adGroupId: string | null
    adId: string | null
    impressions: number | null
    clicks: number | null
    reach: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyReportCountAggregateOutputType = {
    date: number
    mediaId: number
    adSlotId: number
    advertiserId: number
    campaignId: number
    adGroupId: number
    adId: number
    impressions: number
    clicks: number
    reach: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    impressions?: true
    clicks?: true
    reach?: true
  }

  export type DailyReportSumAggregateInputType = {
    impressions?: true
    clicks?: true
    reach?: true
  }

  export type DailyReportMinAggregateInputType = {
    date?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressions?: true
    clicks?: true
    reach?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReportMaxAggregateInputType = {
    date?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressions?: true
    clicks?: true
    reach?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyReportCountAggregateInputType = {
    date?: true
    mediaId?: true
    adSlotId?: true
    advertiserId?: true
    campaignId?: true
    adGroupId?: true
    adId?: true
    impressions?: true
    clicks?: true
    reach?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    date: Date
    mediaId: string
    adSlotId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    impressions: number
    clicks: number
    reach: number
    createdAt: Date
    updatedAt: Date
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressions?: boolean
    clicks?: boolean
    reach?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressions?: boolean
    clicks?: boolean
    reach?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressions?: boolean
    clicks?: boolean
    reach?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectScalar = {
    date?: boolean
    mediaId?: boolean
    adSlotId?: boolean
    advertiserId?: boolean
    campaignId?: boolean
    adGroupId?: boolean
    adId?: boolean
    impressions?: boolean
    clicks?: boolean
    reach?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "mediaId" | "adSlotId" | "advertiserId" | "campaignId" | "adGroupId" | "adId" | "impressions" | "clicks" | "reach" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyReport"]>

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      date: Date
      mediaId: string
      adSlotId: string
      advertiserId: string
      campaignId: string
      adGroupId: string
      adId: string
      impressions: number
      clicks: number
      reach: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const dailyReportWithDateOnly = await prisma.dailyReport.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReports and returns the data saved in the database.
     * @param {DailyReportCreateManyAndReturnArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReports and only return the `date`
     * const dailyReportWithDateOnly = await prisma.dailyReport.createManyAndReturn({
     *   select: { date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports and returns the data updated in the database.
     * @param {DailyReportUpdateManyAndReturnArgs} args - Arguments to update many DailyReports.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyReports and only return the `date`
     * const dailyReportWithDateOnly = await prisma.dailyReport.updateManyAndReturn({
     *   select: { date: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReport model
   */
  interface DailyReportFieldRefs {
    readonly date: FieldRef<"DailyReport", 'DateTime'>
    readonly mediaId: FieldRef<"DailyReport", 'String'>
    readonly adSlotId: FieldRef<"DailyReport", 'String'>
    readonly advertiserId: FieldRef<"DailyReport", 'String'>
    readonly campaignId: FieldRef<"DailyReport", 'String'>
    readonly adGroupId: FieldRef<"DailyReport", 'String'>
    readonly adId: FieldRef<"DailyReport", 'String'>
    readonly impressions: FieldRef<"DailyReport", 'Int'>
    readonly clicks: FieldRef<"DailyReport", 'Int'>
    readonly reach: FieldRef<"DailyReport", 'Int'>
    readonly createdAt: FieldRef<"DailyReport", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
  }

  /**
   * DailyReport createManyAndReturn
   */
  export type DailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport updateManyAndReturn
   */
  export type DailyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to delete.
     */
    limit?: number
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMembershipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationMembershipScalarFieldEnum = (typeof OrganizationMembershipScalarFieldEnum)[keyof typeof OrganizationMembershipScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categories: 'categories',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const AdSlotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mediaId: 'mediaId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdSlotScalarFieldEnum = (typeof AdSlotScalarFieldEnum)[keyof typeof AdSlotScalarFieldEnum]


  export const CompanionSlotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    adSlotId: 'adSlotId',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanionSlotScalarFieldEnum = (typeof CompanionSlotScalarFieldEnum)[keyof typeof CompanionSlotScalarFieldEnum]


  export const AdvertiserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdvertiserScalarFieldEnum = (typeof AdvertiserScalarFieldEnum)[keyof typeof AdvertiserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    advertiserId: 'advertiserId',
    startAt: 'startAt',
    endAt: 'endAt',
    budget: 'budget',
    budgetType: 'budgetType',
    deliveryPace: 'deliveryPace',
    spentBudget: 'spentBudget',
    remainingBudget: 'remainingBudget',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const AdGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categories: 'categories',
    bidPriceCPM: 'bidPriceCPM',
    frequencyCapImpressions: 'frequencyCapImpressions',
    frequencyCapWindow: 'frequencyCapWindow',
    frequencyCapUnit: 'frequencyCapUnit',
    advertiserId: 'advertiserId',
    campaignId: 'campaignId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdGroupScalarFieldEnum = (typeof AdGroupScalarFieldEnum)[keyof typeof AdGroupScalarFieldEnum]


  export const AdScalarFieldEnum: {
    id: 'id',
    advertiserId: 'advertiserId',
    adGroupId: 'adGroupId',
    type: 'type',
    url: 'url',
    duration: 'duration',
    width: 'width',
    height: 'height',
    mimeType: 'mimeType',
    clickThroughURL: 'clickThroughURL',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdScalarFieldEnum = (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum]


  export const CompanionBannerScalarFieldEnum: {
    id: 'id',
    adId: 'adId',
    url: 'url',
    width: 'width',
    height: 'height',
    mimeType: 'mimeType',
    clickThroughURL: 'clickThroughURL',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanionBannerScalarFieldEnum = (typeof CompanionBannerScalarFieldEnum)[keyof typeof CompanionBannerScalarFieldEnum]


  export const ClickScalarFieldEnum: {
    id: 'id',
    adSlotId: 'adSlotId',
    mediaId: 'mediaId',
    advertiserId: 'advertiserId',
    campaignId: 'campaignId',
    adGroupId: 'adGroupId',
    adId: 'adId',
    timestamp: 'timestamp',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    isCompanion: 'isCompanion',
    impressionId: 'impressionId',
    uid: 'uid',
    clickThroughURL: 'clickThroughURL',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClickScalarFieldEnum = (typeof ClickScalarFieldEnum)[keyof typeof ClickScalarFieldEnum]


  export const AdEventScalarFieldEnum: {
    id: 'id',
    eventTimestamp: 'eventTimestamp',
    eventType: 'eventType',
    mediaId: 'mediaId',
    adSlotId: 'adSlotId',
    advertiserId: 'advertiserId',
    campaignId: 'campaignId',
    adGroupId: 'adGroupId',
    adId: 'adId',
    impressionId: 'impressionId',
    progress: 'progress',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    uid: 'uid'
  };

  export type AdEventScalarFieldEnum = (typeof AdEventScalarFieldEnum)[keyof typeof AdEventScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    date: 'date',
    mediaId: 'mediaId',
    adSlotId: 'adSlotId',
    advertiserId: 'advertiserId',
    campaignId: 'campaignId',
    adGroupId: 'adGroupId',
    adId: 'adId',
    impressions: 'impressions',
    clicks: 'clicks',
    reach: 'reach',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    membership?: OrganizationMembershipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    membership?: OrganizationMembershipOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    membership?: OrganizationMembershipListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    membership?: OrganizationMembershipListRelationFilter
    advertisers?: AdvertiserListRelationFilter
    media?: MediaListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    membership?: OrganizationMembershipOrderByRelationAggregateInput
    advertisers?: AdvertiserOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    membership?: OrganizationMembershipListRelationFilter
    advertisers?: AdvertiserListRelationFilter
    media?: MediaListRelationFilter
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationMembershipWhereInput = {
    AND?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    OR?: OrganizationMembershipWhereInput[]
    NOT?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    id?: StringFilter<"OrganizationMembership"> | string
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: StringFilter<"OrganizationMembership"> | string
    permissions?: StringFilter<"OrganizationMembership"> | string
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationMembershipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    OR?: OrganizationMembershipWhereInput[]
    NOT?: OrganizationMembershipWhereInput | OrganizationMembershipWhereInput[]
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: StringFilter<"OrganizationMembership"> | string
    permissions?: StringFilter<"OrganizationMembership"> | string
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type OrganizationMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationMembershipCountOrderByAggregateInput
    _max?: OrganizationMembershipMaxOrderByAggregateInput
    _min?: OrganizationMembershipMinOrderByAggregateInput
  }

  export type OrganizationMembershipScalarWhereWithAggregatesInput = {
    AND?: OrganizationMembershipScalarWhereWithAggregatesInput | OrganizationMembershipScalarWhereWithAggregatesInput[]
    OR?: OrganizationMembershipScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMembershipScalarWhereWithAggregatesInput | OrganizationMembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    userId?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    role?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    permissions?: StringWithAggregatesFilter<"OrganizationMembership"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationMembership"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    name?: StringFilter<"Media"> | string
    categories?: StringNullableFilter<"Media"> | string | null
    organizationId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    adSlots?: AdSlotListRelationFilter
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adSlots?: AdSlotOrderByRelationAggregateInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    categories?: StringNullableFilter<"Media"> | string | null
    organizationId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
    adSlots?: AdSlotListRelationFilter
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "name">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    name?: StringWithAggregatesFilter<"Media"> | string
    categories?: StringNullableWithAggregatesFilter<"Media"> | string | null
    organizationId?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type AdSlotWhereInput = {
    AND?: AdSlotWhereInput | AdSlotWhereInput[]
    OR?: AdSlotWhereInput[]
    NOT?: AdSlotWhereInput | AdSlotWhereInput[]
    id?: StringFilter<"AdSlot"> | string
    name?: StringFilter<"AdSlot"> | string
    mediaId?: StringFilter<"AdSlot"> | string
    type?: StringFilter<"AdSlot"> | string
    createdAt?: DateTimeFilter<"AdSlot"> | Date | string
    updatedAt?: DateTimeFilter<"AdSlot"> | Date | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    companionSlots?: CompanionSlotListRelationFilter
  }

  export type AdSlotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mediaId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    media?: MediaOrderByWithRelationInput
    companionSlots?: CompanionSlotOrderByRelationAggregateInput
  }

  export type AdSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AdSlotWhereInput | AdSlotWhereInput[]
    OR?: AdSlotWhereInput[]
    NOT?: AdSlotWhereInput | AdSlotWhereInput[]
    mediaId?: StringFilter<"AdSlot"> | string
    type?: StringFilter<"AdSlot"> | string
    createdAt?: DateTimeFilter<"AdSlot"> | Date | string
    updatedAt?: DateTimeFilter<"AdSlot"> | Date | string
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
    companionSlots?: CompanionSlotListRelationFilter
  }, "id" | "name">

  export type AdSlotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mediaId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdSlotCountOrderByAggregateInput
    _max?: AdSlotMaxOrderByAggregateInput
    _min?: AdSlotMinOrderByAggregateInput
  }

  export type AdSlotScalarWhereWithAggregatesInput = {
    AND?: AdSlotScalarWhereWithAggregatesInput | AdSlotScalarWhereWithAggregatesInput[]
    OR?: AdSlotScalarWhereWithAggregatesInput[]
    NOT?: AdSlotScalarWhereWithAggregatesInput | AdSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdSlot"> | string
    name?: StringWithAggregatesFilter<"AdSlot"> | string
    mediaId?: StringWithAggregatesFilter<"AdSlot"> | string
    type?: StringWithAggregatesFilter<"AdSlot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdSlot"> | Date | string
  }

  export type CompanionSlotWhereInput = {
    AND?: CompanionSlotWhereInput | CompanionSlotWhereInput[]
    OR?: CompanionSlotWhereInput[]
    NOT?: CompanionSlotWhereInput | CompanionSlotWhereInput[]
    id?: StringFilter<"CompanionSlot"> | string
    name?: StringFilter<"CompanionSlot"> | string
    adSlotId?: StringFilter<"CompanionSlot"> | string
    width?: IntFilter<"CompanionSlot"> | number
    height?: IntFilter<"CompanionSlot"> | number
    createdAt?: DateTimeFilter<"CompanionSlot"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionSlot"> | Date | string
    adSlot?: XOR<AdSlotScalarRelationFilter, AdSlotWhereInput>
  }

  export type CompanionSlotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    adSlotId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adSlot?: AdSlotOrderByWithRelationInput
  }

  export type CompanionSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanionSlotWhereInput | CompanionSlotWhereInput[]
    OR?: CompanionSlotWhereInput[]
    NOT?: CompanionSlotWhereInput | CompanionSlotWhereInput[]
    name?: StringFilter<"CompanionSlot"> | string
    adSlotId?: StringFilter<"CompanionSlot"> | string
    width?: IntFilter<"CompanionSlot"> | number
    height?: IntFilter<"CompanionSlot"> | number
    createdAt?: DateTimeFilter<"CompanionSlot"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionSlot"> | Date | string
    adSlot?: XOR<AdSlotScalarRelationFilter, AdSlotWhereInput>
  }, "id">

  export type CompanionSlotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    adSlotId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanionSlotCountOrderByAggregateInput
    _avg?: CompanionSlotAvgOrderByAggregateInput
    _max?: CompanionSlotMaxOrderByAggregateInput
    _min?: CompanionSlotMinOrderByAggregateInput
    _sum?: CompanionSlotSumOrderByAggregateInput
  }

  export type CompanionSlotScalarWhereWithAggregatesInput = {
    AND?: CompanionSlotScalarWhereWithAggregatesInput | CompanionSlotScalarWhereWithAggregatesInput[]
    OR?: CompanionSlotScalarWhereWithAggregatesInput[]
    NOT?: CompanionSlotScalarWhereWithAggregatesInput | CompanionSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanionSlot"> | string
    name?: StringWithAggregatesFilter<"CompanionSlot"> | string
    adSlotId?: StringWithAggregatesFilter<"CompanionSlot"> | string
    width?: IntWithAggregatesFilter<"CompanionSlot"> | number
    height?: IntWithAggregatesFilter<"CompanionSlot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompanionSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanionSlot"> | Date | string
  }

  export type AdvertiserWhereInput = {
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    id?: StringFilter<"Advertiser"> | string
    name?: StringFilter<"Advertiser"> | string
    organizationId?: StringFilter<"Advertiser"> | string
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeFilter<"Advertiser"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    campaigns?: CampaignListRelationFilter
    adGroups?: AdGroupListRelationFilter
    ads?: AdListRelationFilter
  }

  export type AdvertiserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
    adGroups?: AdGroupOrderByRelationAggregateInput
    ads?: AdOrderByRelationAggregateInput
  }

  export type AdvertiserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    organizationId?: StringFilter<"Advertiser"> | string
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeFilter<"Advertiser"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    campaigns?: CampaignListRelationFilter
    adGroups?: AdGroupListRelationFilter
    ads?: AdListRelationFilter
  }, "id" | "name">

  export type AdvertiserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdvertiserCountOrderByAggregateInput
    _max?: AdvertiserMaxOrderByAggregateInput
    _min?: AdvertiserMinOrderByAggregateInput
  }

  export type AdvertiserScalarWhereWithAggregatesInput = {
    AND?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    OR?: AdvertiserScalarWhereWithAggregatesInput[]
    NOT?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Advertiser"> | string
    name?: StringWithAggregatesFilter<"Advertiser"> | string
    organizationId?: StringWithAggregatesFilter<"Advertiser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Advertiser"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    advertiserId?: StringFilter<"Campaign"> | string
    startAt?: DateTimeFilter<"Campaign"> | Date | string
    endAt?: DateTimeFilter<"Campaign"> | Date | string
    budget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    budgetType?: StringFilter<"Campaign"> | string
    deliveryPace?: StringFilter<"Campaign"> | string
    spentBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    adGroups?: AdGroupListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    advertiserId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    deliveryPace?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adGroups?: AdGroupOrderByRelationAggregateInput
    advertiser?: AdvertiserOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    advertiserId?: StringFilter<"Campaign"> | string
    startAt?: DateTimeFilter<"Campaign"> | Date | string
    endAt?: DateTimeFilter<"Campaign"> | Date | string
    budget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    budgetType?: StringFilter<"Campaign"> | string
    deliveryPace?: StringFilter<"Campaign"> | string
    spentBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    adGroups?: AdGroupListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
  }, "id" | "name">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    advertiserId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    deliveryPace?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    advertiserId?: StringWithAggregatesFilter<"Campaign"> | string
    startAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    budget?: DecimalWithAggregatesFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    budgetType?: StringWithAggregatesFilter<"Campaign"> | string
    deliveryPace?: StringWithAggregatesFilter<"Campaign"> | string
    spentBudget?: DecimalWithAggregatesFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalWithAggregatesFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type AdGroupWhereInput = {
    AND?: AdGroupWhereInput | AdGroupWhereInput[]
    OR?: AdGroupWhereInput[]
    NOT?: AdGroupWhereInput | AdGroupWhereInput[]
    id?: StringFilter<"AdGroup"> | string
    name?: StringFilter<"AdGroup"> | string
    categories?: StringNullableFilter<"AdGroup"> | string | null
    bidPriceCPM?: DecimalFilter<"AdGroup"> | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFilter<"AdGroup"> | number
    frequencyCapWindow?: IntFilter<"AdGroup"> | number
    frequencyCapUnit?: StringFilter<"AdGroup"> | string
    advertiserId?: StringFilter<"AdGroup"> | string
    campaignId?: StringFilter<"AdGroup"> | string
    createdAt?: DateTimeFilter<"AdGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AdGroup"> | Date | string
    ads?: AdListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type AdGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrderInput | SortOrder
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
    frequencyCapUnit?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ads?: AdOrderByRelationAggregateInput
    advertiser?: AdvertiserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type AdGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AdGroupWhereInput | AdGroupWhereInput[]
    OR?: AdGroupWhereInput[]
    NOT?: AdGroupWhereInput | AdGroupWhereInput[]
    categories?: StringNullableFilter<"AdGroup"> | string | null
    bidPriceCPM?: DecimalFilter<"AdGroup"> | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFilter<"AdGroup"> | number
    frequencyCapWindow?: IntFilter<"AdGroup"> | number
    frequencyCapUnit?: StringFilter<"AdGroup"> | string
    advertiserId?: StringFilter<"AdGroup"> | string
    campaignId?: StringFilter<"AdGroup"> | string
    createdAt?: DateTimeFilter<"AdGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AdGroup"> | Date | string
    ads?: AdListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id" | "name">

  export type AdGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrderInput | SortOrder
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
    frequencyCapUnit?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdGroupCountOrderByAggregateInput
    _avg?: AdGroupAvgOrderByAggregateInput
    _max?: AdGroupMaxOrderByAggregateInput
    _min?: AdGroupMinOrderByAggregateInput
    _sum?: AdGroupSumOrderByAggregateInput
  }

  export type AdGroupScalarWhereWithAggregatesInput = {
    AND?: AdGroupScalarWhereWithAggregatesInput | AdGroupScalarWhereWithAggregatesInput[]
    OR?: AdGroupScalarWhereWithAggregatesInput[]
    NOT?: AdGroupScalarWhereWithAggregatesInput | AdGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdGroup"> | string
    name?: StringWithAggregatesFilter<"AdGroup"> | string
    categories?: StringNullableWithAggregatesFilter<"AdGroup"> | string | null
    bidPriceCPM?: DecimalWithAggregatesFilter<"AdGroup"> | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntWithAggregatesFilter<"AdGroup"> | number
    frequencyCapWindow?: IntWithAggregatesFilter<"AdGroup"> | number
    frequencyCapUnit?: StringWithAggregatesFilter<"AdGroup"> | string
    advertiserId?: StringWithAggregatesFilter<"AdGroup"> | string
    campaignId?: StringWithAggregatesFilter<"AdGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdGroup"> | Date | string
  }

  export type AdWhereInput = {
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    id?: StringFilter<"Ad"> | string
    advertiserId?: StringFilter<"Ad"> | string
    adGroupId?: StringFilter<"Ad"> | string
    type?: StringFilter<"Ad"> | string
    url?: StringFilter<"Ad"> | string
    duration?: IntFilter<"Ad"> | number
    width?: IntNullableFilter<"Ad"> | number | null
    height?: IntNullableFilter<"Ad"> | number | null
    mimeType?: StringNullableFilter<"Ad"> | string | null
    clickThroughURL?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
    companionBanners?: CompanionBannerListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    adGroup?: XOR<AdGroupScalarRelationFilter, AdGroupWhereInput>
  }

  export type AdOrderByWithRelationInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    adGroupId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    clickThroughURL?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companionBanners?: CompanionBannerOrderByRelationAggregateInput
    advertiser?: AdvertiserOrderByWithRelationInput
    adGroup?: AdGroupOrderByWithRelationInput
  }

  export type AdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdWhereInput | AdWhereInput[]
    OR?: AdWhereInput[]
    NOT?: AdWhereInput | AdWhereInput[]
    advertiserId?: StringFilter<"Ad"> | string
    adGroupId?: StringFilter<"Ad"> | string
    type?: StringFilter<"Ad"> | string
    url?: StringFilter<"Ad"> | string
    duration?: IntFilter<"Ad"> | number
    width?: IntNullableFilter<"Ad"> | number | null
    height?: IntNullableFilter<"Ad"> | number | null
    mimeType?: StringNullableFilter<"Ad"> | string | null
    clickThroughURL?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
    companionBanners?: CompanionBannerListRelationFilter
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    adGroup?: XOR<AdGroupScalarRelationFilter, AdGroupWhereInput>
  }, "id">

  export type AdOrderByWithAggregationInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    adGroupId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    clickThroughURL?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdCountOrderByAggregateInput
    _avg?: AdAvgOrderByAggregateInput
    _max?: AdMaxOrderByAggregateInput
    _min?: AdMinOrderByAggregateInput
    _sum?: AdSumOrderByAggregateInput
  }

  export type AdScalarWhereWithAggregatesInput = {
    AND?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    OR?: AdScalarWhereWithAggregatesInput[]
    NOT?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ad"> | string
    advertiserId?: StringWithAggregatesFilter<"Ad"> | string
    adGroupId?: StringWithAggregatesFilter<"Ad"> | string
    type?: StringWithAggregatesFilter<"Ad"> | string
    url?: StringWithAggregatesFilter<"Ad"> | string
    duration?: IntWithAggregatesFilter<"Ad"> | number
    width?: IntNullableWithAggregatesFilter<"Ad"> | number | null
    height?: IntNullableWithAggregatesFilter<"Ad"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    clickThroughURL?: StringWithAggregatesFilter<"Ad"> | string
    description?: StringNullableWithAggregatesFilter<"Ad"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ad"> | Date | string
  }

  export type CompanionBannerWhereInput = {
    AND?: CompanionBannerWhereInput | CompanionBannerWhereInput[]
    OR?: CompanionBannerWhereInput[]
    NOT?: CompanionBannerWhereInput | CompanionBannerWhereInput[]
    id?: StringFilter<"CompanionBanner"> | string
    adId?: StringFilter<"CompanionBanner"> | string
    url?: StringFilter<"CompanionBanner"> | string
    width?: IntFilter<"CompanionBanner"> | number
    height?: IntFilter<"CompanionBanner"> | number
    mimeType?: StringNullableFilter<"CompanionBanner"> | string | null
    clickThroughURL?: StringNullableFilter<"CompanionBanner"> | string | null
    createdAt?: DateTimeFilter<"CompanionBanner"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionBanner"> | Date | string
    ad?: XOR<AdScalarRelationFilter, AdWhereInput>
  }

  export type CompanionBannerOrderByWithRelationInput = {
    id?: SortOrder
    adId?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    clickThroughURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ad?: AdOrderByWithRelationInput
  }

  export type CompanionBannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanionBannerWhereInput | CompanionBannerWhereInput[]
    OR?: CompanionBannerWhereInput[]
    NOT?: CompanionBannerWhereInput | CompanionBannerWhereInput[]
    adId?: StringFilter<"CompanionBanner"> | string
    url?: StringFilter<"CompanionBanner"> | string
    width?: IntFilter<"CompanionBanner"> | number
    height?: IntFilter<"CompanionBanner"> | number
    mimeType?: StringNullableFilter<"CompanionBanner"> | string | null
    clickThroughURL?: StringNullableFilter<"CompanionBanner"> | string | null
    createdAt?: DateTimeFilter<"CompanionBanner"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionBanner"> | Date | string
    ad?: XOR<AdScalarRelationFilter, AdWhereInput>
  }, "id">

  export type CompanionBannerOrderByWithAggregationInput = {
    id?: SortOrder
    adId?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrderInput | SortOrder
    clickThroughURL?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanionBannerCountOrderByAggregateInput
    _avg?: CompanionBannerAvgOrderByAggregateInput
    _max?: CompanionBannerMaxOrderByAggregateInput
    _min?: CompanionBannerMinOrderByAggregateInput
    _sum?: CompanionBannerSumOrderByAggregateInput
  }

  export type CompanionBannerScalarWhereWithAggregatesInput = {
    AND?: CompanionBannerScalarWhereWithAggregatesInput | CompanionBannerScalarWhereWithAggregatesInput[]
    OR?: CompanionBannerScalarWhereWithAggregatesInput[]
    NOT?: CompanionBannerScalarWhereWithAggregatesInput | CompanionBannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanionBanner"> | string
    adId?: StringWithAggregatesFilter<"CompanionBanner"> | string
    url?: StringWithAggregatesFilter<"CompanionBanner"> | string
    width?: IntWithAggregatesFilter<"CompanionBanner"> | number
    height?: IntWithAggregatesFilter<"CompanionBanner"> | number
    mimeType?: StringNullableWithAggregatesFilter<"CompanionBanner"> | string | null
    clickThroughURL?: StringNullableWithAggregatesFilter<"CompanionBanner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompanionBanner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanionBanner"> | Date | string
  }

  export type ClickWhereInput = {
    AND?: ClickWhereInput | ClickWhereInput[]
    OR?: ClickWhereInput[]
    NOT?: ClickWhereInput | ClickWhereInput[]
    id?: StringFilter<"Click"> | string
    adSlotId?: StringFilter<"Click"> | string
    mediaId?: StringFilter<"Click"> | string
    advertiserId?: StringFilter<"Click"> | string
    campaignId?: StringFilter<"Click"> | string
    adGroupId?: StringFilter<"Click"> | string
    adId?: StringFilter<"Click"> | string
    timestamp?: DateTimeFilter<"Click"> | Date | string
    ipAddress?: StringFilter<"Click"> | string
    userAgent?: StringFilter<"Click"> | string
    isCompanion?: BoolFilter<"Click"> | boolean
    impressionId?: StringFilter<"Click"> | string
    uid?: StringFilter<"Click"> | string
    clickThroughURL?: StringFilter<"Click"> | string
    createdAt?: DateTimeFilter<"Click"> | Date | string
    updatedAt?: DateTimeFilter<"Click"> | Date | string
  }

  export type ClickOrderByWithRelationInput = {
    id?: SortOrder
    adSlotId?: SortOrder
    mediaId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isCompanion?: SortOrder
    impressionId?: SortOrder
    uid?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClickWhereInput | ClickWhereInput[]
    OR?: ClickWhereInput[]
    NOT?: ClickWhereInput | ClickWhereInput[]
    adSlotId?: StringFilter<"Click"> | string
    mediaId?: StringFilter<"Click"> | string
    advertiserId?: StringFilter<"Click"> | string
    campaignId?: StringFilter<"Click"> | string
    adGroupId?: StringFilter<"Click"> | string
    adId?: StringFilter<"Click"> | string
    timestamp?: DateTimeFilter<"Click"> | Date | string
    ipAddress?: StringFilter<"Click"> | string
    userAgent?: StringFilter<"Click"> | string
    isCompanion?: BoolFilter<"Click"> | boolean
    impressionId?: StringFilter<"Click"> | string
    uid?: StringFilter<"Click"> | string
    clickThroughURL?: StringFilter<"Click"> | string
    createdAt?: DateTimeFilter<"Click"> | Date | string
    updatedAt?: DateTimeFilter<"Click"> | Date | string
  }, "id">

  export type ClickOrderByWithAggregationInput = {
    id?: SortOrder
    adSlotId?: SortOrder
    mediaId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isCompanion?: SortOrder
    impressionId?: SortOrder
    uid?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClickCountOrderByAggregateInput
    _max?: ClickMaxOrderByAggregateInput
    _min?: ClickMinOrderByAggregateInput
  }

  export type ClickScalarWhereWithAggregatesInput = {
    AND?: ClickScalarWhereWithAggregatesInput | ClickScalarWhereWithAggregatesInput[]
    OR?: ClickScalarWhereWithAggregatesInput[]
    NOT?: ClickScalarWhereWithAggregatesInput | ClickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Click"> | string
    adSlotId?: StringWithAggregatesFilter<"Click"> | string
    mediaId?: StringWithAggregatesFilter<"Click"> | string
    advertiserId?: StringWithAggregatesFilter<"Click"> | string
    campaignId?: StringWithAggregatesFilter<"Click"> | string
    adGroupId?: StringWithAggregatesFilter<"Click"> | string
    adId?: StringWithAggregatesFilter<"Click"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Click"> | Date | string
    ipAddress?: StringWithAggregatesFilter<"Click"> | string
    userAgent?: StringWithAggregatesFilter<"Click"> | string
    isCompanion?: BoolWithAggregatesFilter<"Click"> | boolean
    impressionId?: StringWithAggregatesFilter<"Click"> | string
    uid?: StringWithAggregatesFilter<"Click"> | string
    clickThroughURL?: StringWithAggregatesFilter<"Click"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Click"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Click"> | Date | string
  }

  export type AdEventWhereInput = {
    AND?: AdEventWhereInput | AdEventWhereInput[]
    OR?: AdEventWhereInput[]
    NOT?: AdEventWhereInput | AdEventWhereInput[]
    id?: StringFilter<"AdEvent"> | string
    eventTimestamp?: DateTimeFilter<"AdEvent"> | Date | string
    eventType?: StringFilter<"AdEvent"> | string
    mediaId?: StringNullableFilter<"AdEvent"> | string | null
    adSlotId?: StringNullableFilter<"AdEvent"> | string | null
    advertiserId?: StringNullableFilter<"AdEvent"> | string | null
    campaignId?: StringNullableFilter<"AdEvent"> | string | null
    adGroupId?: StringNullableFilter<"AdEvent"> | string | null
    adId?: StringNullableFilter<"AdEvent"> | string | null
    impressionId?: StringNullableFilter<"AdEvent"> | string | null
    progress?: IntNullableFilter<"AdEvent"> | number | null
    ipAddress?: StringFilter<"AdEvent"> | string
    userAgent?: StringFilter<"AdEvent"> | string
    uid?: StringFilter<"AdEvent"> | string
  }

  export type AdEventOrderByWithRelationInput = {
    id?: SortOrder
    eventTimestamp?: SortOrder
    eventType?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    adSlotId?: SortOrderInput | SortOrder
    advertiserId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    adGroupId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    impressionId?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    uid?: SortOrder
  }

  export type AdEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdEventWhereInput | AdEventWhereInput[]
    OR?: AdEventWhereInput[]
    NOT?: AdEventWhereInput | AdEventWhereInput[]
    eventTimestamp?: DateTimeFilter<"AdEvent"> | Date | string
    eventType?: StringFilter<"AdEvent"> | string
    mediaId?: StringNullableFilter<"AdEvent"> | string | null
    adSlotId?: StringNullableFilter<"AdEvent"> | string | null
    advertiserId?: StringNullableFilter<"AdEvent"> | string | null
    campaignId?: StringNullableFilter<"AdEvent"> | string | null
    adGroupId?: StringNullableFilter<"AdEvent"> | string | null
    adId?: StringNullableFilter<"AdEvent"> | string | null
    impressionId?: StringNullableFilter<"AdEvent"> | string | null
    progress?: IntNullableFilter<"AdEvent"> | number | null
    ipAddress?: StringFilter<"AdEvent"> | string
    userAgent?: StringFilter<"AdEvent"> | string
    uid?: StringFilter<"AdEvent"> | string
  }, "id">

  export type AdEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventTimestamp?: SortOrder
    eventType?: SortOrder
    mediaId?: SortOrderInput | SortOrder
    adSlotId?: SortOrderInput | SortOrder
    advertiserId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    adGroupId?: SortOrderInput | SortOrder
    adId?: SortOrderInput | SortOrder
    impressionId?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    uid?: SortOrder
    _count?: AdEventCountOrderByAggregateInput
    _avg?: AdEventAvgOrderByAggregateInput
    _max?: AdEventMaxOrderByAggregateInput
    _min?: AdEventMinOrderByAggregateInput
    _sum?: AdEventSumOrderByAggregateInput
  }

  export type AdEventScalarWhereWithAggregatesInput = {
    AND?: AdEventScalarWhereWithAggregatesInput | AdEventScalarWhereWithAggregatesInput[]
    OR?: AdEventScalarWhereWithAggregatesInput[]
    NOT?: AdEventScalarWhereWithAggregatesInput | AdEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdEvent"> | string
    eventTimestamp?: DateTimeWithAggregatesFilter<"AdEvent"> | Date | string
    eventType?: StringWithAggregatesFilter<"AdEvent"> | string
    mediaId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    adSlotId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    advertiserId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    campaignId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    adGroupId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    adId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    impressionId?: StringNullableWithAggregatesFilter<"AdEvent"> | string | null
    progress?: IntNullableWithAggregatesFilter<"AdEvent"> | number | null
    ipAddress?: StringWithAggregatesFilter<"AdEvent"> | string
    userAgent?: StringWithAggregatesFilter<"AdEvent"> | string
    uid?: StringWithAggregatesFilter<"AdEvent"> | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    date?: DateTimeFilter<"DailyReport"> | Date | string
    mediaId?: StringFilter<"DailyReport"> | string
    adSlotId?: StringFilter<"DailyReport"> | string
    advertiserId?: StringFilter<"DailyReport"> | string
    campaignId?: StringFilter<"DailyReport"> | string
    adGroupId?: StringFilter<"DailyReport"> | string
    adId?: StringFilter<"DailyReport"> | string
    impressions?: IntFilter<"DailyReport"> | number
    clicks?: IntFilter<"DailyReport"> | number
    reach?: IntFilter<"DailyReport"> | number
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
  }

  export type DailyReportOrderByWithRelationInput = {
    date?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    date_media_adslot_advertiser_campaign_adgroup_ad?: DailyReportDate_media_adslot_advertiser_campaign_adgroup_adCompoundUniqueInput
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    date?: DateTimeFilter<"DailyReport"> | Date | string
    mediaId?: StringFilter<"DailyReport"> | string
    adSlotId?: StringFilter<"DailyReport"> | string
    advertiserId?: StringFilter<"DailyReport"> | string
    campaignId?: StringFilter<"DailyReport"> | string
    adGroupId?: StringFilter<"DailyReport"> | string
    adId?: StringFilter<"DailyReport"> | string
    impressions?: IntFilter<"DailyReport"> | number
    clicks?: IntFilter<"DailyReport"> | number
    reach?: IntFilter<"DailyReport"> | number
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeFilter<"DailyReport"> | Date | string
  }, "date_media_adslot_advertiser_campaign_adgroup_ad">

  export type DailyReportOrderByWithAggregationInput = {
    date?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    date?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    mediaId?: StringWithAggregatesFilter<"DailyReport"> | string
    adSlotId?: StringWithAggregatesFilter<"DailyReport"> | string
    advertiserId?: StringWithAggregatesFilter<"DailyReport"> | string
    campaignId?: StringWithAggregatesFilter<"DailyReport"> | string
    adGroupId?: StringWithAggregatesFilter<"DailyReport"> | string
    adId?: StringWithAggregatesFilter<"DailyReport"> | string
    impressions?: IntWithAggregatesFilter<"DailyReport"> | number
    clicks?: IntWithAggregatesFilter<"DailyReport"> | number
    reach?: IntWithAggregatesFilter<"DailyReport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    advertisers?: AdvertiserCreateNestedManyWithoutOrganizationInput
    media?: MediaCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    advertisers?: AdvertiserUncheckedCreateNestedManyWithoutOrganizationInput
    media?: MediaUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    advertisers?: AdvertiserUpdateManyWithoutOrganizationNestedInput
    media?: MediaUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    advertisers?: AdvertiserUncheckedUpdateManyWithoutOrganizationNestedInput
    media?: MediaUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateInput = {
    id: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipInput
    organization: OrganizationCreateNestedOneWithoutMembershipInput
  }

  export type OrganizationMembershipUncheckedCreateInput = {
    id: string
    userId: string
    organizationId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateManyInput = {
    id: string
    userId: string
    organizationId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id: string
    name: string
    categories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adSlots?: AdSlotCreateNestedManyWithoutMediaInput
    organization: OrganizationCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id: string
    name: string
    categories?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adSlots?: AdSlotUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adSlots?: AdSlotUpdateManyWithoutMediaNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adSlots?: AdSlotUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id: string
    name: string
    categories?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdSlotCreateInput = {
    id: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media: MediaCreateNestedOneWithoutAdSlotsInput
    companionSlots?: CompanionSlotCreateNestedManyWithoutAdSlotInput
  }

  export type AdSlotUncheckedCreateInput = {
    id: string
    name: string
    mediaId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companionSlots?: CompanionSlotUncheckedCreateNestedManyWithoutAdSlotInput
  }

  export type AdSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateOneRequiredWithoutAdSlotsNestedInput
    companionSlots?: CompanionSlotUpdateManyWithoutAdSlotNestedInput
  }

  export type AdSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionSlots?: CompanionSlotUncheckedUpdateManyWithoutAdSlotNestedInput
  }

  export type AdSlotCreateManyInput = {
    id: string
    name: string
    mediaId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotCreateInput = {
    id: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    adSlot: AdSlotCreateNestedOneWithoutCompanionSlotsInput
  }

  export type CompanionSlotUncheckedCreateInput = {
    id: string
    name: string
    adSlotId: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adSlot?: AdSlotUpdateOneRequiredWithoutCompanionSlotsNestedInput
  }

  export type CompanionSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotCreateManyInput = {
    id: string
    name: string
    adSlotId: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdvertisersInput
    campaigns?: CampaignCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupCreateNestedManyWithoutAdvertiserInput
    ads?: AdCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateInput = {
    id: string
    name: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutAdvertiserInput
    ads?: AdUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdvertisersNestedInput
    campaigns?: CampaignUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUncheckedUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserCreateManyInput = {
    id: string
    name: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id: string
    name: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adGroups?: AdGroupCreateNestedManyWithoutCampaignInput
    advertiser: AdvertiserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id: string
    name: string
    advertiserId: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adGroups?: AdGroupUpdateManyWithoutCampaignNestedInput
    advertiser?: AdvertiserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adGroups?: AdGroupUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id: string
    name: string
    advertiserId: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdGroupCreateInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdCreateNestedManyWithoutAdGroupInput
    advertiser: AdvertiserCreateNestedOneWithoutAdGroupsInput
    campaign: CampaignCreateNestedOneWithoutAdGroupsInput
  }

  export type AdGroupUncheckedCreateInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUpdateManyWithoutAdGroupNestedInput
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdGroupsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type AdGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupCreateManyInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdCreateInput = {
    id: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerCreateNestedManyWithoutAdInput
    advertiser: AdvertiserCreateNestedOneWithoutAdsInput
    adGroup: AdGroupCreateNestedOneWithoutAdsInput
  }

  export type AdUncheckedCreateInput = {
    id: string
    advertiserId: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUpdateManyWithoutAdNestedInput
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdsNestedInput
    adGroup?: AdGroupUpdateOneRequiredWithoutAdsNestedInput
  }

  export type AdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdCreateManyInput = {
    id: string
    advertiserId: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerCreateInput = {
    id: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ad: AdCreateNestedOneWithoutCompanionBannersInput
  }

  export type CompanionBannerUncheckedCreateInput = {
    id: string
    adId: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionBannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ad?: AdUpdateOneRequiredWithoutCompanionBannersNestedInput
  }

  export type CompanionBannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerCreateManyInput = {
    id: string
    adId: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionBannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickCreateInput = {
    id: string
    adSlotId: string
    mediaId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    timestamp?: Date | string
    ipAddress: string
    userAgent: string
    isCompanion: boolean
    impressionId: string
    uid: string
    clickThroughURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickUncheckedCreateInput = {
    id: string
    adSlotId: string
    mediaId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    timestamp?: Date | string
    ipAddress: string
    userAgent: string
    isCompanion: boolean
    impressionId: string
    uid: string
    clickThroughURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    impressionId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    impressionId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickCreateManyInput = {
    id: string
    adSlotId: string
    mediaId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    timestamp?: Date | string
    ipAddress: string
    userAgent: string
    isCompanion: boolean
    impressionId: string
    uid: string
    clickThroughURL: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    impressionId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    isCompanion?: BoolFieldUpdateOperationsInput | boolean
    impressionId?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdEventCreateInput = {
    id: string
    eventTimestamp?: Date | string
    eventType: string
    mediaId?: string | null
    adSlotId?: string | null
    advertiserId?: string | null
    campaignId?: string | null
    adGroupId?: string | null
    adId?: string | null
    impressionId?: string | null
    progress?: number | null
    ipAddress: string
    userAgent: string
    uid: string
  }

  export type AdEventUncheckedCreateInput = {
    id: string
    eventTimestamp?: Date | string
    eventType: string
    mediaId?: string | null
    adSlotId?: string | null
    advertiserId?: string | null
    campaignId?: string | null
    adGroupId?: string | null
    adId?: string | null
    impressionId?: string | null
    progress?: number | null
    ipAddress: string
    userAgent: string
    uid: string
  }

  export type AdEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    adSlotId?: NullableStringFieldUpdateOperationsInput | string | null
    advertiserId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    adGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    impressionId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AdEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    adSlotId?: NullableStringFieldUpdateOperationsInput | string | null
    advertiserId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    adGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    impressionId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AdEventCreateManyInput = {
    id: string
    eventTimestamp?: Date | string
    eventType: string
    mediaId?: string | null
    adSlotId?: string | null
    advertiserId?: string | null
    campaignId?: string | null
    adGroupId?: string | null
    adId?: string | null
    impressionId?: string | null
    progress?: number | null
    ipAddress: string
    userAgent: string
    uid: string
  }

  export type AdEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    adSlotId?: NullableStringFieldUpdateOperationsInput | string | null
    advertiserId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    adGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    impressionId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type AdEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    mediaId?: NullableStringFieldUpdateOperationsInput | string | null
    adSlotId?: NullableStringFieldUpdateOperationsInput | string | null
    advertiserId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    adGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    adId?: NullableStringFieldUpdateOperationsInput | string | null
    impressionId?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportCreateInput = {
    date: Date | string
    mediaId: string
    adSlotId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    impressions?: number
    clicks?: number
    reach?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUncheckedCreateInput = {
    date: Date | string
    mediaId: string
    adSlotId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    impressions?: number
    clicks?: number
    reach?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    reach?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    reach?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateManyInput = {
    date: Date | string
    mediaId: string
    adSlotId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
    impressions?: number
    clicks?: number
    reach?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    reach?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaId?: StringFieldUpdateOperationsInput | string
    adSlotId?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    adId?: StringFieldUpdateOperationsInput | string
    impressions?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    reach?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganizationMembershipListRelationFilter = {
    every?: OrganizationMembershipWhereInput
    some?: OrganizationMembershipWhereInput
    none?: OrganizationMembershipWhereInput
  }

  export type OrganizationMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdvertiserListRelationFilter = {
    every?: AdvertiserWhereInput
    some?: AdvertiserWhereInput
    none?: AdvertiserWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type AdvertiserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AdSlotListRelationFilter = {
    every?: AdSlotWhereInput
    some?: AdSlotWhereInput
    none?: AdSlotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type CompanionSlotListRelationFilter = {
    every?: CompanionSlotWhereInput
    some?: CompanionSlotWhereInput
    none?: CompanionSlotWhereInput
  }

  export type CompanionSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdSlotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mediaId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mediaId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdSlotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mediaId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AdSlotScalarRelationFilter = {
    is?: AdSlotWhereInput
    isNot?: AdSlotWhereInput
  }

  export type CompanionSlotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adSlotId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionSlotAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type CompanionSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adSlotId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionSlotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    adSlotId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionSlotSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type AdGroupListRelationFilter = {
    every?: AdGroupWhereInput
    some?: AdGroupWhereInput
    none?: AdGroupWhereInput
  }

  export type AdListRelationFilter = {
    every?: AdWhereInput
    some?: AdWhereInput
    none?: AdWhereInput
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdvertiserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdvertiserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AdvertiserScalarRelationFilter = {
    is?: AdvertiserWhereInput
    isNot?: AdvertiserWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    advertiserId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    deliveryPace?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    budget?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    advertiserId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    deliveryPace?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    advertiserId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    budget?: SortOrder
    budgetType?: SortOrder
    deliveryPace?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    budget?: SortOrder
    spentBudget?: SortOrder
    remainingBudget?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type AdGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
    frequencyCapUnit?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdGroupAvgOrderByAggregateInput = {
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
  }

  export type AdGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
    frequencyCapUnit?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: SortOrder
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
    frequencyCapUnit?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdGroupSumOrderByAggregateInput = {
    bidPriceCPM?: SortOrder
    frequencyCapImpressions?: SortOrder
    frequencyCapWindow?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanionBannerListRelationFilter = {
    every?: CompanionBannerWhereInput
    some?: CompanionBannerWhereInput
    none?: CompanionBannerWhereInput
  }

  export type AdGroupScalarRelationFilter = {
    is?: AdGroupWhereInput
    isNot?: AdGroupWhereInput
  }

  export type CompanionBannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdCountOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    adGroupId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAvgOrderByAggregateInput = {
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type AdMaxOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    adGroupId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdMinOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    adGroupId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdSumOrderByAggregateInput = {
    duration?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AdScalarRelationFilter = {
    is?: AdWhereInput
    isNot?: AdWhereInput
  }

  export type CompanionBannerCountOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionBannerAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type CompanionBannerMaxOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionBannerMinOrderByAggregateInput = {
    id?: SortOrder
    adId?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    mimeType?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionBannerSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClickCountOrderByAggregateInput = {
    id?: SortOrder
    adSlotId?: SortOrder
    mediaId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isCompanion?: SortOrder
    impressionId?: SortOrder
    uid?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickMaxOrderByAggregateInput = {
    id?: SortOrder
    adSlotId?: SortOrder
    mediaId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isCompanion?: SortOrder
    impressionId?: SortOrder
    uid?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClickMinOrderByAggregateInput = {
    id?: SortOrder
    adSlotId?: SortOrder
    mediaId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    timestamp?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isCompanion?: SortOrder
    impressionId?: SortOrder
    uid?: SortOrder
    clickThroughURL?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventTimestamp?: SortOrder
    eventType?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressionId?: SortOrder
    progress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    uid?: SortOrder
  }

  export type AdEventAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type AdEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTimestamp?: SortOrder
    eventType?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressionId?: SortOrder
    progress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    uid?: SortOrder
  }

  export type AdEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventTimestamp?: SortOrder
    eventType?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressionId?: SortOrder
    progress?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    uid?: SortOrder
  }

  export type AdEventSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type DailyReportDate_media_adslot_advertiser_campaign_adgroup_adCompoundUniqueInput = {
    date: Date | string
    mediaId: string
    adSlotId: string
    advertiserId: string
    campaignId: string
    adGroupId: string
    adId: string
  }

  export type DailyReportCountOrderByAggregateInput = {
    date?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    date?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    date?: SortOrder
    mediaId?: SortOrder
    adSlotId?: SortOrder
    advertiserId?: SortOrder
    campaignId?: SortOrder
    adGroupId?: SortOrder
    adId?: SortOrder
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    impressions?: SortOrder
    clicks?: SortOrder
    reach?: SortOrder
  }

  export type OrganizationMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type OrganizationMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutUserInput | OrganizationMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput> | OrganizationMembershipCreateWithoutUserInput[] | OrganizationMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutUserInput | OrganizationMembershipCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput | OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMembershipCreateManyUserInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput | OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutUserInput | OrganizationMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type OrganizationMembershipCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type AdvertiserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput> | AdvertiserCreateWithoutOrganizationInput[] | AdvertiserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdvertiserCreateOrConnectWithoutOrganizationInput | AdvertiserCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdvertiserCreateManyOrganizationInputEnvelope
    connect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput> | MediaCreateWithoutOrganizationInput[] | MediaUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOrganizationInput | MediaCreateOrConnectWithoutOrganizationInput[]
    createMany?: MediaCreateManyOrganizationInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
  }

  export type AdvertiserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput> | AdvertiserCreateWithoutOrganizationInput[] | AdvertiserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdvertiserCreateOrConnectWithoutOrganizationInput | AdvertiserCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdvertiserCreateManyOrganizationInputEnvelope
    connect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput> | MediaCreateWithoutOrganizationInput[] | MediaUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOrganizationInput | MediaCreateOrConnectWithoutOrganizationInput[]
    createMany?: MediaCreateManyOrganizationInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type OrganizationMembershipUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type AdvertiserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput> | AdvertiserCreateWithoutOrganizationInput[] | AdvertiserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdvertiserCreateOrConnectWithoutOrganizationInput | AdvertiserCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdvertiserUpsertWithWhereUniqueWithoutOrganizationInput | AdvertiserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdvertiserCreateManyOrganizationInputEnvelope
    set?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    disconnect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    delete?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    connect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    update?: AdvertiserUpdateWithWhereUniqueWithoutOrganizationInput | AdvertiserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdvertiserUpdateManyWithWhereWithoutOrganizationInput | AdvertiserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdvertiserScalarWhereInput | AdvertiserScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput> | MediaCreateWithoutOrganizationInput[] | MediaUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOrganizationInput | MediaCreateOrConnectWithoutOrganizationInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutOrganizationInput | MediaUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MediaCreateManyOrganizationInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutOrganizationInput | MediaUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutOrganizationInput | MediaUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput> | OrganizationMembershipCreateWithoutOrganizationInput[] | OrganizationMembershipUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMembershipCreateOrConnectWithoutOrganizationInput | OrganizationMembershipCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMembershipCreateManyOrganizationInputEnvelope
    set?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    disconnect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    delete?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    connect?: OrganizationMembershipWhereUniqueInput | OrganizationMembershipWhereUniqueInput[]
    update?: OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput | OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
  }

  export type AdvertiserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput> | AdvertiserCreateWithoutOrganizationInput[] | AdvertiserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdvertiserCreateOrConnectWithoutOrganizationInput | AdvertiserCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdvertiserUpsertWithWhereUniqueWithoutOrganizationInput | AdvertiserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdvertiserCreateManyOrganizationInputEnvelope
    set?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    disconnect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    delete?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    connect?: AdvertiserWhereUniqueInput | AdvertiserWhereUniqueInput[]
    update?: AdvertiserUpdateWithWhereUniqueWithoutOrganizationInput | AdvertiserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdvertiserUpdateManyWithWhereWithoutOrganizationInput | AdvertiserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdvertiserScalarWhereInput | AdvertiserScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput> | MediaCreateWithoutOrganizationInput[] | MediaUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutOrganizationInput | MediaCreateOrConnectWithoutOrganizationInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutOrganizationInput | MediaUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MediaCreateManyOrganizationInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutOrganizationInput | MediaUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutOrganizationInput | MediaUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipInput = {
    create?: XOR<UserCreateWithoutMembershipInput, UserUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMembershipInput = {
    create?: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: XOR<UserCreateWithoutMembershipInput, UserUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipInput
    upsert?: UserUpsertWithoutMembershipInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipInput, UserUpdateWithoutMembershipInput>, UserUncheckedUpdateWithoutMembershipInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipInput
    upsert?: OrganizationUpsertWithoutMembershipInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembershipInput, OrganizationUpdateWithoutMembershipInput>, OrganizationUncheckedUpdateWithoutMembershipInput>
  }

  export type AdSlotCreateNestedManyWithoutMediaInput = {
    create?: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput> | AdSlotCreateWithoutMediaInput[] | AdSlotUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdSlotCreateOrConnectWithoutMediaInput | AdSlotCreateOrConnectWithoutMediaInput[]
    createMany?: AdSlotCreateManyMediaInputEnvelope
    connect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutMediaInput = {
    create?: XOR<OrganizationCreateWithoutMediaInput, OrganizationUncheckedCreateWithoutMediaInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMediaInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AdSlotUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput> | AdSlotCreateWithoutMediaInput[] | AdSlotUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdSlotCreateOrConnectWithoutMediaInput | AdSlotCreateOrConnectWithoutMediaInput[]
    createMany?: AdSlotCreateManyMediaInputEnvelope
    connect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdSlotUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput> | AdSlotCreateWithoutMediaInput[] | AdSlotUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdSlotCreateOrConnectWithoutMediaInput | AdSlotCreateOrConnectWithoutMediaInput[]
    upsert?: AdSlotUpsertWithWhereUniqueWithoutMediaInput | AdSlotUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AdSlotCreateManyMediaInputEnvelope
    set?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    disconnect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    delete?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    connect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    update?: AdSlotUpdateWithWhereUniqueWithoutMediaInput | AdSlotUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AdSlotUpdateManyWithWhereWithoutMediaInput | AdSlotUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AdSlotScalarWhereInput | AdSlotScalarWhereInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<OrganizationCreateWithoutMediaInput, OrganizationUncheckedCreateWithoutMediaInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMediaInput
    upsert?: OrganizationUpsertWithoutMediaInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMediaInput, OrganizationUpdateWithoutMediaInput>, OrganizationUncheckedUpdateWithoutMediaInput>
  }

  export type AdSlotUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput> | AdSlotCreateWithoutMediaInput[] | AdSlotUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdSlotCreateOrConnectWithoutMediaInput | AdSlotCreateOrConnectWithoutMediaInput[]
    upsert?: AdSlotUpsertWithWhereUniqueWithoutMediaInput | AdSlotUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AdSlotCreateManyMediaInputEnvelope
    set?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    disconnect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    delete?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    connect?: AdSlotWhereUniqueInput | AdSlotWhereUniqueInput[]
    update?: AdSlotUpdateWithWhereUniqueWithoutMediaInput | AdSlotUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AdSlotUpdateManyWithWhereWithoutMediaInput | AdSlotUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AdSlotScalarWhereInput | AdSlotScalarWhereInput[]
  }

  export type MediaCreateNestedOneWithoutAdSlotsInput = {
    create?: XOR<MediaCreateWithoutAdSlotsInput, MediaUncheckedCreateWithoutAdSlotsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutAdSlotsInput
    connect?: MediaWhereUniqueInput
  }

  export type CompanionSlotCreateNestedManyWithoutAdSlotInput = {
    create?: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput> | CompanionSlotCreateWithoutAdSlotInput[] | CompanionSlotUncheckedCreateWithoutAdSlotInput[]
    connectOrCreate?: CompanionSlotCreateOrConnectWithoutAdSlotInput | CompanionSlotCreateOrConnectWithoutAdSlotInput[]
    createMany?: CompanionSlotCreateManyAdSlotInputEnvelope
    connect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
  }

  export type CompanionSlotUncheckedCreateNestedManyWithoutAdSlotInput = {
    create?: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput> | CompanionSlotCreateWithoutAdSlotInput[] | CompanionSlotUncheckedCreateWithoutAdSlotInput[]
    connectOrCreate?: CompanionSlotCreateOrConnectWithoutAdSlotInput | CompanionSlotCreateOrConnectWithoutAdSlotInput[]
    createMany?: CompanionSlotCreateManyAdSlotInputEnvelope
    connect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
  }

  export type MediaUpdateOneRequiredWithoutAdSlotsNestedInput = {
    create?: XOR<MediaCreateWithoutAdSlotsInput, MediaUncheckedCreateWithoutAdSlotsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutAdSlotsInput
    upsert?: MediaUpsertWithoutAdSlotsInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutAdSlotsInput, MediaUpdateWithoutAdSlotsInput>, MediaUncheckedUpdateWithoutAdSlotsInput>
  }

  export type CompanionSlotUpdateManyWithoutAdSlotNestedInput = {
    create?: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput> | CompanionSlotCreateWithoutAdSlotInput[] | CompanionSlotUncheckedCreateWithoutAdSlotInput[]
    connectOrCreate?: CompanionSlotCreateOrConnectWithoutAdSlotInput | CompanionSlotCreateOrConnectWithoutAdSlotInput[]
    upsert?: CompanionSlotUpsertWithWhereUniqueWithoutAdSlotInput | CompanionSlotUpsertWithWhereUniqueWithoutAdSlotInput[]
    createMany?: CompanionSlotCreateManyAdSlotInputEnvelope
    set?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    disconnect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    delete?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    connect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    update?: CompanionSlotUpdateWithWhereUniqueWithoutAdSlotInput | CompanionSlotUpdateWithWhereUniqueWithoutAdSlotInput[]
    updateMany?: CompanionSlotUpdateManyWithWhereWithoutAdSlotInput | CompanionSlotUpdateManyWithWhereWithoutAdSlotInput[]
    deleteMany?: CompanionSlotScalarWhereInput | CompanionSlotScalarWhereInput[]
  }

  export type CompanionSlotUncheckedUpdateManyWithoutAdSlotNestedInput = {
    create?: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput> | CompanionSlotCreateWithoutAdSlotInput[] | CompanionSlotUncheckedCreateWithoutAdSlotInput[]
    connectOrCreate?: CompanionSlotCreateOrConnectWithoutAdSlotInput | CompanionSlotCreateOrConnectWithoutAdSlotInput[]
    upsert?: CompanionSlotUpsertWithWhereUniqueWithoutAdSlotInput | CompanionSlotUpsertWithWhereUniqueWithoutAdSlotInput[]
    createMany?: CompanionSlotCreateManyAdSlotInputEnvelope
    set?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    disconnect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    delete?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    connect?: CompanionSlotWhereUniqueInput | CompanionSlotWhereUniqueInput[]
    update?: CompanionSlotUpdateWithWhereUniqueWithoutAdSlotInput | CompanionSlotUpdateWithWhereUniqueWithoutAdSlotInput[]
    updateMany?: CompanionSlotUpdateManyWithWhereWithoutAdSlotInput | CompanionSlotUpdateManyWithWhereWithoutAdSlotInput[]
    deleteMany?: CompanionSlotScalarWhereInput | CompanionSlotScalarWhereInput[]
  }

  export type AdSlotCreateNestedOneWithoutCompanionSlotsInput = {
    create?: XOR<AdSlotCreateWithoutCompanionSlotsInput, AdSlotUncheckedCreateWithoutCompanionSlotsInput>
    connectOrCreate?: AdSlotCreateOrConnectWithoutCompanionSlotsInput
    connect?: AdSlotWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdSlotUpdateOneRequiredWithoutCompanionSlotsNestedInput = {
    create?: XOR<AdSlotCreateWithoutCompanionSlotsInput, AdSlotUncheckedCreateWithoutCompanionSlotsInput>
    connectOrCreate?: AdSlotCreateOrConnectWithoutCompanionSlotsInput
    upsert?: AdSlotUpsertWithoutCompanionSlotsInput
    connect?: AdSlotWhereUniqueInput
    update?: XOR<XOR<AdSlotUpdateToOneWithWhereWithoutCompanionSlotsInput, AdSlotUpdateWithoutCompanionSlotsInput>, AdSlotUncheckedUpdateWithoutCompanionSlotsInput>
  }

  export type OrganizationCreateNestedOneWithoutAdvertisersInput = {
    create?: XOR<OrganizationCreateWithoutAdvertisersInput, OrganizationUncheckedCreateWithoutAdvertisersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdvertisersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput> | CampaignCreateWithoutAdvertiserInput[] | CampaignUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAdvertiserInput | CampaignCreateOrConnectWithoutAdvertiserInput[]
    createMany?: CampaignCreateManyAdvertiserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type AdGroupCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput> | AdGroupCreateWithoutAdvertiserInput[] | AdGroupUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdvertiserInput | AdGroupCreateOrConnectWithoutAdvertiserInput[]
    createMany?: AdGroupCreateManyAdvertiserInputEnvelope
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
  }

  export type AdCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput> | AdCreateWithoutAdvertiserInput[] | AdUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdvertiserInput | AdCreateOrConnectWithoutAdvertiserInput[]
    createMany?: AdCreateManyAdvertiserInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput> | CampaignCreateWithoutAdvertiserInput[] | CampaignUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAdvertiserInput | CampaignCreateOrConnectWithoutAdvertiserInput[]
    createMany?: CampaignCreateManyAdvertiserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type AdGroupUncheckedCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput> | AdGroupCreateWithoutAdvertiserInput[] | AdGroupUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdvertiserInput | AdGroupCreateOrConnectWithoutAdvertiserInput[]
    createMany?: AdGroupCreateManyAdvertiserInputEnvelope
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
  }

  export type AdUncheckedCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput> | AdCreateWithoutAdvertiserInput[] | AdUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdvertiserInput | AdCreateOrConnectWithoutAdvertiserInput[]
    createMany?: AdCreateManyAdvertiserInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutAdvertisersNestedInput = {
    create?: XOR<OrganizationCreateWithoutAdvertisersInput, OrganizationUncheckedCreateWithoutAdvertisersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdvertisersInput
    upsert?: OrganizationUpsertWithoutAdvertisersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAdvertisersInput, OrganizationUpdateWithoutAdvertisersInput>, OrganizationUncheckedUpdateWithoutAdvertisersInput>
  }

  export type CampaignUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput> | CampaignCreateWithoutAdvertiserInput[] | CampaignUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAdvertiserInput | CampaignCreateOrConnectWithoutAdvertiserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutAdvertiserInput | CampaignUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: CampaignCreateManyAdvertiserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutAdvertiserInput | CampaignUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutAdvertiserInput | CampaignUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type AdGroupUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput> | AdGroupCreateWithoutAdvertiserInput[] | AdGroupUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdvertiserInput | AdGroupCreateOrConnectWithoutAdvertiserInput[]
    upsert?: AdGroupUpsertWithWhereUniqueWithoutAdvertiserInput | AdGroupUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: AdGroupCreateManyAdvertiserInputEnvelope
    set?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    disconnect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    delete?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    update?: AdGroupUpdateWithWhereUniqueWithoutAdvertiserInput | AdGroupUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: AdGroupUpdateManyWithWhereWithoutAdvertiserInput | AdGroupUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
  }

  export type AdUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput> | AdCreateWithoutAdvertiserInput[] | AdUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdvertiserInput | AdCreateOrConnectWithoutAdvertiserInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutAdvertiserInput | AdUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: AdCreateManyAdvertiserInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutAdvertiserInput | AdUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: AdUpdateManyWithWhereWithoutAdvertiserInput | AdUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput> | CampaignCreateWithoutAdvertiserInput[] | CampaignUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutAdvertiserInput | CampaignCreateOrConnectWithoutAdvertiserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutAdvertiserInput | CampaignUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: CampaignCreateManyAdvertiserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutAdvertiserInput | CampaignUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutAdvertiserInput | CampaignUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type AdGroupUncheckedUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput> | AdGroupCreateWithoutAdvertiserInput[] | AdGroupUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdvertiserInput | AdGroupCreateOrConnectWithoutAdvertiserInput[]
    upsert?: AdGroupUpsertWithWhereUniqueWithoutAdvertiserInput | AdGroupUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: AdGroupCreateManyAdvertiserInputEnvelope
    set?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    disconnect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    delete?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    update?: AdGroupUpdateWithWhereUniqueWithoutAdvertiserInput | AdGroupUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: AdGroupUpdateManyWithWhereWithoutAdvertiserInput | AdGroupUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
  }

  export type AdUncheckedUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput> | AdCreateWithoutAdvertiserInput[] | AdUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdvertiserInput | AdCreateOrConnectWithoutAdvertiserInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutAdvertiserInput | AdUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: AdCreateManyAdvertiserInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutAdvertiserInput | AdUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: AdUpdateManyWithWhereWithoutAdvertiserInput | AdUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdGroupCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput> | AdGroupCreateWithoutCampaignInput[] | AdGroupUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutCampaignInput | AdGroupCreateOrConnectWithoutCampaignInput[]
    createMany?: AdGroupCreateManyCampaignInputEnvelope
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
  }

  export type AdvertiserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<AdvertiserCreateWithoutCampaignsInput, AdvertiserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutCampaignsInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type AdGroupUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput> | AdGroupCreateWithoutCampaignInput[] | AdGroupUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutCampaignInput | AdGroupCreateOrConnectWithoutCampaignInput[]
    createMany?: AdGroupCreateManyCampaignInputEnvelope
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AdGroupUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput> | AdGroupCreateWithoutCampaignInput[] | AdGroupUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutCampaignInput | AdGroupCreateOrConnectWithoutCampaignInput[]
    upsert?: AdGroupUpsertWithWhereUniqueWithoutCampaignInput | AdGroupUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AdGroupCreateManyCampaignInputEnvelope
    set?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    disconnect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    delete?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    update?: AdGroupUpdateWithWhereUniqueWithoutCampaignInput | AdGroupUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AdGroupUpdateManyWithWhereWithoutCampaignInput | AdGroupUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
  }

  export type AdvertiserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<AdvertiserCreateWithoutCampaignsInput, AdvertiserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutCampaignsInput
    upsert?: AdvertiserUpsertWithoutCampaignsInput
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutCampaignsInput, AdvertiserUpdateWithoutCampaignsInput>, AdvertiserUncheckedUpdateWithoutCampaignsInput>
  }

  export type AdGroupUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput> | AdGroupCreateWithoutCampaignInput[] | AdGroupUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdGroupCreateOrConnectWithoutCampaignInput | AdGroupCreateOrConnectWithoutCampaignInput[]
    upsert?: AdGroupUpsertWithWhereUniqueWithoutCampaignInput | AdGroupUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AdGroupCreateManyCampaignInputEnvelope
    set?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    disconnect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    delete?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    connect?: AdGroupWhereUniqueInput | AdGroupWhereUniqueInput[]
    update?: AdGroupUpdateWithWhereUniqueWithoutCampaignInput | AdGroupUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AdGroupUpdateManyWithWhereWithoutCampaignInput | AdGroupUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
  }

  export type AdCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput> | AdCreateWithoutAdGroupInput[] | AdUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdGroupInput | AdCreateOrConnectWithoutAdGroupInput[]
    createMany?: AdCreateManyAdGroupInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type AdvertiserCreateNestedOneWithoutAdGroupsInput = {
    create?: XOR<AdvertiserCreateWithoutAdGroupsInput, AdvertiserUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdGroupsInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutAdGroupsInput = {
    create?: XOR<CampaignCreateWithoutAdGroupsInput, CampaignUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutAdGroupsInput
    connect?: CampaignWhereUniqueInput
  }

  export type AdUncheckedCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput> | AdCreateWithoutAdGroupInput[] | AdUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdGroupInput | AdCreateOrConnectWithoutAdGroupInput[]
    createMany?: AdCreateManyAdGroupInputEnvelope
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
  }

  export type AdUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput> | AdCreateWithoutAdGroupInput[] | AdUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdGroupInput | AdCreateOrConnectWithoutAdGroupInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutAdGroupInput | AdUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: AdCreateManyAdGroupInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutAdGroupInput | AdUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: AdUpdateManyWithWhereWithoutAdGroupInput | AdUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type AdvertiserUpdateOneRequiredWithoutAdGroupsNestedInput = {
    create?: XOR<AdvertiserCreateWithoutAdGroupsInput, AdvertiserUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdGroupsInput
    upsert?: AdvertiserUpsertWithoutAdGroupsInput
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutAdGroupsInput, AdvertiserUpdateWithoutAdGroupsInput>, AdvertiserUncheckedUpdateWithoutAdGroupsInput>
  }

  export type CampaignUpdateOneRequiredWithoutAdGroupsNestedInput = {
    create?: XOR<CampaignCreateWithoutAdGroupsInput, CampaignUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutAdGroupsInput
    upsert?: CampaignUpsertWithoutAdGroupsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutAdGroupsInput, CampaignUpdateWithoutAdGroupsInput>, CampaignUncheckedUpdateWithoutAdGroupsInput>
  }

  export type AdUncheckedUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput> | AdCreateWithoutAdGroupInput[] | AdUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: AdCreateOrConnectWithoutAdGroupInput | AdCreateOrConnectWithoutAdGroupInput[]
    upsert?: AdUpsertWithWhereUniqueWithoutAdGroupInput | AdUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: AdCreateManyAdGroupInputEnvelope
    set?: AdWhereUniqueInput | AdWhereUniqueInput[]
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[]
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[]
    update?: AdUpdateWithWhereUniqueWithoutAdGroupInput | AdUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: AdUpdateManyWithWhereWithoutAdGroupInput | AdUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[]
  }

  export type CompanionBannerCreateNestedManyWithoutAdInput = {
    create?: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput> | CompanionBannerCreateWithoutAdInput[] | CompanionBannerUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CompanionBannerCreateOrConnectWithoutAdInput | CompanionBannerCreateOrConnectWithoutAdInput[]
    createMany?: CompanionBannerCreateManyAdInputEnvelope
    connect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
  }

  export type AdvertiserCreateNestedOneWithoutAdsInput = {
    create?: XOR<AdvertiserCreateWithoutAdsInput, AdvertiserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdsInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type AdGroupCreateNestedOneWithoutAdsInput = {
    create?: XOR<AdGroupCreateWithoutAdsInput, AdGroupUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdsInput
    connect?: AdGroupWhereUniqueInput
  }

  export type CompanionBannerUncheckedCreateNestedManyWithoutAdInput = {
    create?: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput> | CompanionBannerCreateWithoutAdInput[] | CompanionBannerUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CompanionBannerCreateOrConnectWithoutAdInput | CompanionBannerCreateOrConnectWithoutAdInput[]
    createMany?: CompanionBannerCreateManyAdInputEnvelope
    connect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanionBannerUpdateManyWithoutAdNestedInput = {
    create?: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput> | CompanionBannerCreateWithoutAdInput[] | CompanionBannerUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CompanionBannerCreateOrConnectWithoutAdInput | CompanionBannerCreateOrConnectWithoutAdInput[]
    upsert?: CompanionBannerUpsertWithWhereUniqueWithoutAdInput | CompanionBannerUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CompanionBannerCreateManyAdInputEnvelope
    set?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    disconnect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    delete?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    connect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    update?: CompanionBannerUpdateWithWhereUniqueWithoutAdInput | CompanionBannerUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CompanionBannerUpdateManyWithWhereWithoutAdInput | CompanionBannerUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CompanionBannerScalarWhereInput | CompanionBannerScalarWhereInput[]
  }

  export type AdvertiserUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<AdvertiserCreateWithoutAdsInput, AdvertiserUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutAdsInput
    upsert?: AdvertiserUpsertWithoutAdsInput
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutAdsInput, AdvertiserUpdateWithoutAdsInput>, AdvertiserUncheckedUpdateWithoutAdsInput>
  }

  export type AdGroupUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<AdGroupCreateWithoutAdsInput, AdGroupUncheckedCreateWithoutAdsInput>
    connectOrCreate?: AdGroupCreateOrConnectWithoutAdsInput
    upsert?: AdGroupUpsertWithoutAdsInput
    connect?: AdGroupWhereUniqueInput
    update?: XOR<XOR<AdGroupUpdateToOneWithWhereWithoutAdsInput, AdGroupUpdateWithoutAdsInput>, AdGroupUncheckedUpdateWithoutAdsInput>
  }

  export type CompanionBannerUncheckedUpdateManyWithoutAdNestedInput = {
    create?: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput> | CompanionBannerCreateWithoutAdInput[] | CompanionBannerUncheckedCreateWithoutAdInput[]
    connectOrCreate?: CompanionBannerCreateOrConnectWithoutAdInput | CompanionBannerCreateOrConnectWithoutAdInput[]
    upsert?: CompanionBannerUpsertWithWhereUniqueWithoutAdInput | CompanionBannerUpsertWithWhereUniqueWithoutAdInput[]
    createMany?: CompanionBannerCreateManyAdInputEnvelope
    set?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    disconnect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    delete?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    connect?: CompanionBannerWhereUniqueInput | CompanionBannerWhereUniqueInput[]
    update?: CompanionBannerUpdateWithWhereUniqueWithoutAdInput | CompanionBannerUpdateWithWhereUniqueWithoutAdInput[]
    updateMany?: CompanionBannerUpdateManyWithWhereWithoutAdInput | CompanionBannerUpdateManyWithWhereWithoutAdInput[]
    deleteMany?: CompanionBannerScalarWhereInput | CompanionBannerScalarWhereInput[]
  }

  export type AdCreateNestedOneWithoutCompanionBannersInput = {
    create?: XOR<AdCreateWithoutCompanionBannersInput, AdUncheckedCreateWithoutCompanionBannersInput>
    connectOrCreate?: AdCreateOrConnectWithoutCompanionBannersInput
    connect?: AdWhereUniqueInput
  }

  export type AdUpdateOneRequiredWithoutCompanionBannersNestedInput = {
    create?: XOR<AdCreateWithoutCompanionBannersInput, AdUncheckedCreateWithoutCompanionBannersInput>
    connectOrCreate?: AdCreateOrConnectWithoutCompanionBannersInput
    upsert?: AdUpsertWithoutCompanionBannersInput
    connect?: AdWhereUniqueInput
    update?: XOR<XOR<AdUpdateToOneWithWhereWithoutCompanionBannersInput, AdUpdateWithoutCompanionBannersInput>, AdUncheckedUpdateWithoutCompanionBannersInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrganizationMembershipCreateWithoutUserInput = {
    id: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembershipInput
  }

  export type OrganizationMembershipUncheckedCreateWithoutUserInput = {
    id: string
    organizationId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipCreateOrConnectWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    create: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembershipCreateManyUserInputEnvelope = {
    data: OrganizationMembershipCreateManyUserInput | OrganizationMembershipCreateManyUserInput[]
  }

  export type OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    update: XOR<OrganizationMembershipUpdateWithoutUserInput, OrganizationMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMembershipCreateWithoutUserInput, OrganizationMembershipUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMembershipWhereUniqueInput
    data: XOR<OrganizationMembershipUpdateWithoutUserInput, OrganizationMembershipUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMembershipUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMembershipScalarWhereInput
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMembershipScalarWhereInput = {
    AND?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
    OR?: OrganizationMembershipScalarWhereInput[]
    NOT?: OrganizationMembershipScalarWhereInput | OrganizationMembershipScalarWhereInput[]
    id?: StringFilter<"OrganizationMembership"> | string
    userId?: StringFilter<"OrganizationMembership"> | string
    organizationId?: StringFilter<"OrganizationMembership"> | string
    role?: StringFilter<"OrganizationMembership"> | string
    permissions?: StringFilter<"OrganizationMembership"> | string
    createdAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationMembership"> | Date | string
  }

  export type OrganizationMembershipCreateWithoutOrganizationInput = {
    id: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipInput
  }

  export type OrganizationMembershipUncheckedCreateWithoutOrganizationInput = {
    id: string
    userId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    create: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembershipCreateManyOrganizationInputEnvelope = {
    data: OrganizationMembershipCreateManyOrganizationInput | OrganizationMembershipCreateManyOrganizationInput[]
  }

  export type AdvertiserCreateWithoutOrganizationInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupCreateNestedManyWithoutAdvertiserInput
    ads?: AdCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateWithoutOrganizationInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutAdvertiserInput
    ads?: AdUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserCreateOrConnectWithoutOrganizationInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput>
  }

  export type AdvertiserCreateManyOrganizationInputEnvelope = {
    data: AdvertiserCreateManyOrganizationInput | AdvertiserCreateManyOrganizationInput[]
  }

  export type MediaCreateWithoutOrganizationInput = {
    id: string
    name: string
    categories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adSlots?: AdSlotCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutOrganizationInput = {
    id: string
    name: string
    categories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adSlots?: AdSlotUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutOrganizationInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput>
  }

  export type MediaCreateManyOrganizationInputEnvelope = {
    data: MediaCreateManyOrganizationInput | MediaCreateManyOrganizationInput[]
  }

  export type OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    update: XOR<OrganizationMembershipUpdateWithoutOrganizationInput, OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMembershipCreateWithoutOrganizationInput, OrganizationMembershipUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMembershipWhereUniqueInput
    data: XOR<OrganizationMembershipUpdateWithoutOrganizationInput, OrganizationMembershipUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMembershipScalarWhereInput
    data: XOR<OrganizationMembershipUpdateManyMutationInput, OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AdvertiserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AdvertiserWhereUniqueInput
    update: XOR<AdvertiserUpdateWithoutOrganizationInput, AdvertiserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AdvertiserCreateWithoutOrganizationInput, AdvertiserUncheckedCreateWithoutOrganizationInput>
  }

  export type AdvertiserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AdvertiserWhereUniqueInput
    data: XOR<AdvertiserUpdateWithoutOrganizationInput, AdvertiserUncheckedUpdateWithoutOrganizationInput>
  }

  export type AdvertiserUpdateManyWithWhereWithoutOrganizationInput = {
    where: AdvertiserScalarWhereInput
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AdvertiserScalarWhereInput = {
    AND?: AdvertiserScalarWhereInput | AdvertiserScalarWhereInput[]
    OR?: AdvertiserScalarWhereInput[]
    NOT?: AdvertiserScalarWhereInput | AdvertiserScalarWhereInput[]
    id?: StringFilter<"Advertiser"> | string
    name?: StringFilter<"Advertiser"> | string
    organizationId?: StringFilter<"Advertiser"> | string
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    updatedAt?: DateTimeFilter<"Advertiser"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutOrganizationInput, MediaUncheckedUpdateWithoutOrganizationInput>
    create: XOR<MediaCreateWithoutOrganizationInput, MediaUncheckedCreateWithoutOrganizationInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutOrganizationInput, MediaUncheckedUpdateWithoutOrganizationInput>
  }

  export type MediaUpdateManyWithWhereWithoutOrganizationInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    name?: StringFilter<"Media"> | string
    categories?: StringNullableFilter<"Media"> | string | null
    organizationId?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type UserCreateWithoutMembershipInput = {
    id: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMembershipInput = {
    id: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMembershipInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipInput, UserUncheckedCreateWithoutMembershipInput>
  }

  export type OrganizationCreateWithoutMembershipInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advertisers?: AdvertiserCreateNestedManyWithoutOrganizationInput
    media?: MediaCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advertisers?: AdvertiserUncheckedCreateNestedManyWithoutOrganizationInput
    media?: MediaUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembershipInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
  }

  export type UserUpsertWithoutMembershipInput = {
    update: XOR<UserUpdateWithoutMembershipInput, UserUncheckedUpdateWithoutMembershipInput>
    create: XOR<UserCreateWithoutMembershipInput, UserUncheckedCreateWithoutMembershipInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipInput, UserUncheckedUpdateWithoutMembershipInput>
  }

  export type UserUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpsertWithoutMembershipInput = {
    update: XOR<OrganizationUpdateWithoutMembershipInput, OrganizationUncheckedUpdateWithoutMembershipInput>
    create: XOR<OrganizationCreateWithoutMembershipInput, OrganizationUncheckedCreateWithoutMembershipInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembershipInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembershipInput, OrganizationUncheckedUpdateWithoutMembershipInput>
  }

  export type OrganizationUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertisers?: AdvertiserUpdateManyWithoutOrganizationNestedInput
    media?: MediaUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertisers?: AdvertiserUncheckedUpdateManyWithoutOrganizationNestedInput
    media?: MediaUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AdSlotCreateWithoutMediaInput = {
    id: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companionSlots?: CompanionSlotCreateNestedManyWithoutAdSlotInput
  }

  export type AdSlotUncheckedCreateWithoutMediaInput = {
    id: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companionSlots?: CompanionSlotUncheckedCreateNestedManyWithoutAdSlotInput
  }

  export type AdSlotCreateOrConnectWithoutMediaInput = {
    where: AdSlotWhereUniqueInput
    create: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput>
  }

  export type AdSlotCreateManyMediaInputEnvelope = {
    data: AdSlotCreateManyMediaInput | AdSlotCreateManyMediaInput[]
  }

  export type OrganizationCreateWithoutMediaInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    advertisers?: AdvertiserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMediaInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    advertisers?: AdvertiserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMediaInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMediaInput, OrganizationUncheckedCreateWithoutMediaInput>
  }

  export type AdSlotUpsertWithWhereUniqueWithoutMediaInput = {
    where: AdSlotWhereUniqueInput
    update: XOR<AdSlotUpdateWithoutMediaInput, AdSlotUncheckedUpdateWithoutMediaInput>
    create: XOR<AdSlotCreateWithoutMediaInput, AdSlotUncheckedCreateWithoutMediaInput>
  }

  export type AdSlotUpdateWithWhereUniqueWithoutMediaInput = {
    where: AdSlotWhereUniqueInput
    data: XOR<AdSlotUpdateWithoutMediaInput, AdSlotUncheckedUpdateWithoutMediaInput>
  }

  export type AdSlotUpdateManyWithWhereWithoutMediaInput = {
    where: AdSlotScalarWhereInput
    data: XOR<AdSlotUpdateManyMutationInput, AdSlotUncheckedUpdateManyWithoutMediaInput>
  }

  export type AdSlotScalarWhereInput = {
    AND?: AdSlotScalarWhereInput | AdSlotScalarWhereInput[]
    OR?: AdSlotScalarWhereInput[]
    NOT?: AdSlotScalarWhereInput | AdSlotScalarWhereInput[]
    id?: StringFilter<"AdSlot"> | string
    name?: StringFilter<"AdSlot"> | string
    mediaId?: StringFilter<"AdSlot"> | string
    type?: StringFilter<"AdSlot"> | string
    createdAt?: DateTimeFilter<"AdSlot"> | Date | string
    updatedAt?: DateTimeFilter<"AdSlot"> | Date | string
  }

  export type OrganizationUpsertWithoutMediaInput = {
    update: XOR<OrganizationUpdateWithoutMediaInput, OrganizationUncheckedUpdateWithoutMediaInput>
    create: XOR<OrganizationCreateWithoutMediaInput, OrganizationUncheckedCreateWithoutMediaInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMediaInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMediaInput, OrganizationUncheckedUpdateWithoutMediaInput>
  }

  export type OrganizationUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    advertisers?: AdvertiserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    advertisers?: AdvertiserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type MediaCreateWithoutAdSlotsInput = {
    id: string
    name: string
    categories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutAdSlotsInput = {
    id: string
    name: string
    categories?: string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutAdSlotsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutAdSlotsInput, MediaUncheckedCreateWithoutAdSlotsInput>
  }

  export type CompanionSlotCreateWithoutAdSlotInput = {
    id: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionSlotUncheckedCreateWithoutAdSlotInput = {
    id: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionSlotCreateOrConnectWithoutAdSlotInput = {
    where: CompanionSlotWhereUniqueInput
    create: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput>
  }

  export type CompanionSlotCreateManyAdSlotInputEnvelope = {
    data: CompanionSlotCreateManyAdSlotInput | CompanionSlotCreateManyAdSlotInput[]
  }

  export type MediaUpsertWithoutAdSlotsInput = {
    update: XOR<MediaUpdateWithoutAdSlotsInput, MediaUncheckedUpdateWithoutAdSlotsInput>
    create: XOR<MediaCreateWithoutAdSlotsInput, MediaUncheckedCreateWithoutAdSlotsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutAdSlotsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutAdSlotsInput, MediaUncheckedUpdateWithoutAdSlotsInput>
  }

  export type MediaUpdateWithoutAdSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutAdSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotUpsertWithWhereUniqueWithoutAdSlotInput = {
    where: CompanionSlotWhereUniqueInput
    update: XOR<CompanionSlotUpdateWithoutAdSlotInput, CompanionSlotUncheckedUpdateWithoutAdSlotInput>
    create: XOR<CompanionSlotCreateWithoutAdSlotInput, CompanionSlotUncheckedCreateWithoutAdSlotInput>
  }

  export type CompanionSlotUpdateWithWhereUniqueWithoutAdSlotInput = {
    where: CompanionSlotWhereUniqueInput
    data: XOR<CompanionSlotUpdateWithoutAdSlotInput, CompanionSlotUncheckedUpdateWithoutAdSlotInput>
  }

  export type CompanionSlotUpdateManyWithWhereWithoutAdSlotInput = {
    where: CompanionSlotScalarWhereInput
    data: XOR<CompanionSlotUpdateManyMutationInput, CompanionSlotUncheckedUpdateManyWithoutAdSlotInput>
  }

  export type CompanionSlotScalarWhereInput = {
    AND?: CompanionSlotScalarWhereInput | CompanionSlotScalarWhereInput[]
    OR?: CompanionSlotScalarWhereInput[]
    NOT?: CompanionSlotScalarWhereInput | CompanionSlotScalarWhereInput[]
    id?: StringFilter<"CompanionSlot"> | string
    name?: StringFilter<"CompanionSlot"> | string
    adSlotId?: StringFilter<"CompanionSlot"> | string
    width?: IntFilter<"CompanionSlot"> | number
    height?: IntFilter<"CompanionSlot"> | number
    createdAt?: DateTimeFilter<"CompanionSlot"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionSlot"> | Date | string
  }

  export type AdSlotCreateWithoutCompanionSlotsInput = {
    id: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    media: MediaCreateNestedOneWithoutAdSlotsInput
  }

  export type AdSlotUncheckedCreateWithoutCompanionSlotsInput = {
    id: string
    name: string
    mediaId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdSlotCreateOrConnectWithoutCompanionSlotsInput = {
    where: AdSlotWhereUniqueInput
    create: XOR<AdSlotCreateWithoutCompanionSlotsInput, AdSlotUncheckedCreateWithoutCompanionSlotsInput>
  }

  export type AdSlotUpsertWithoutCompanionSlotsInput = {
    update: XOR<AdSlotUpdateWithoutCompanionSlotsInput, AdSlotUncheckedUpdateWithoutCompanionSlotsInput>
    create: XOR<AdSlotCreateWithoutCompanionSlotsInput, AdSlotUncheckedCreateWithoutCompanionSlotsInput>
    where?: AdSlotWhereInput
  }

  export type AdSlotUpdateToOneWithWhereWithoutCompanionSlotsInput = {
    where?: AdSlotWhereInput
    data: XOR<AdSlotUpdateWithoutCompanionSlotsInput, AdSlotUncheckedUpdateWithoutCompanionSlotsInput>
  }

  export type AdSlotUpdateWithoutCompanionSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: MediaUpdateOneRequiredWithoutAdSlotsNestedInput
  }

  export type AdSlotUncheckedUpdateWithoutCompanionSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateWithoutAdvertisersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipCreateNestedManyWithoutOrganizationInput
    media?: MediaCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAdvertisersInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    membership?: OrganizationMembershipUncheckedCreateNestedManyWithoutOrganizationInput
    media?: MediaUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAdvertisersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAdvertisersInput, OrganizationUncheckedCreateWithoutAdvertisersInput>
  }

  export type CampaignCreateWithoutAdvertiserInput = {
    id: string
    name: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adGroups?: AdGroupCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutAdvertiserInput = {
    id: string
    name: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutAdvertiserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput>
  }

  export type CampaignCreateManyAdvertiserInputEnvelope = {
    data: CampaignCreateManyAdvertiserInput | CampaignCreateManyAdvertiserInput[]
  }

  export type AdGroupCreateWithoutAdvertiserInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdCreateNestedManyWithoutAdGroupInput
    campaign: CampaignCreateNestedOneWithoutAdGroupsInput
  }

  export type AdGroupUncheckedCreateWithoutAdvertiserInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupCreateOrConnectWithoutAdvertiserInput = {
    where: AdGroupWhereUniqueInput
    create: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput>
  }

  export type AdGroupCreateManyAdvertiserInputEnvelope = {
    data: AdGroupCreateManyAdvertiserInput | AdGroupCreateManyAdvertiserInput[]
  }

  export type AdCreateWithoutAdvertiserInput = {
    id: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerCreateNestedManyWithoutAdInput
    adGroup: AdGroupCreateNestedOneWithoutAdsInput
  }

  export type AdUncheckedCreateWithoutAdvertiserInput = {
    id: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutAdvertiserInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput>
  }

  export type AdCreateManyAdvertiserInputEnvelope = {
    data: AdCreateManyAdvertiserInput | AdCreateManyAdvertiserInput[]
  }

  export type OrganizationUpsertWithoutAdvertisersInput = {
    update: XOR<OrganizationUpdateWithoutAdvertisersInput, OrganizationUncheckedUpdateWithoutAdvertisersInput>
    create: XOR<OrganizationCreateWithoutAdvertisersInput, OrganizationUncheckedCreateWithoutAdvertisersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAdvertisersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAdvertisersInput, OrganizationUncheckedUpdateWithoutAdvertisersInput>
  }

  export type OrganizationUpdateWithoutAdvertisersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUpdateManyWithoutOrganizationNestedInput
    media?: MediaUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAdvertisersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membership?: OrganizationMembershipUncheckedUpdateManyWithoutOrganizationNestedInput
    media?: MediaUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutAdvertiserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutAdvertiserInput, CampaignUncheckedUpdateWithoutAdvertiserInput>
    create: XOR<CampaignCreateWithoutAdvertiserInput, CampaignUncheckedCreateWithoutAdvertiserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutAdvertiserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutAdvertiserInput, CampaignUncheckedUpdateWithoutAdvertiserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutAdvertiserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutAdvertiserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    advertiserId?: StringFilter<"Campaign"> | string
    startAt?: DateTimeFilter<"Campaign"> | Date | string
    endAt?: DateTimeFilter<"Campaign"> | Date | string
    budget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    budgetType?: StringFilter<"Campaign"> | string
    deliveryPace?: StringFilter<"Campaign"> | string
    spentBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFilter<"Campaign"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type AdGroupUpsertWithWhereUniqueWithoutAdvertiserInput = {
    where: AdGroupWhereUniqueInput
    update: XOR<AdGroupUpdateWithoutAdvertiserInput, AdGroupUncheckedUpdateWithoutAdvertiserInput>
    create: XOR<AdGroupCreateWithoutAdvertiserInput, AdGroupUncheckedCreateWithoutAdvertiserInput>
  }

  export type AdGroupUpdateWithWhereUniqueWithoutAdvertiserInput = {
    where: AdGroupWhereUniqueInput
    data: XOR<AdGroupUpdateWithoutAdvertiserInput, AdGroupUncheckedUpdateWithoutAdvertiserInput>
  }

  export type AdGroupUpdateManyWithWhereWithoutAdvertiserInput = {
    where: AdGroupScalarWhereInput
    data: XOR<AdGroupUpdateManyMutationInput, AdGroupUncheckedUpdateManyWithoutAdvertiserInput>
  }

  export type AdGroupScalarWhereInput = {
    AND?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
    OR?: AdGroupScalarWhereInput[]
    NOT?: AdGroupScalarWhereInput | AdGroupScalarWhereInput[]
    id?: StringFilter<"AdGroup"> | string
    name?: StringFilter<"AdGroup"> | string
    categories?: StringNullableFilter<"AdGroup"> | string | null
    bidPriceCPM?: DecimalFilter<"AdGroup"> | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFilter<"AdGroup"> | number
    frequencyCapWindow?: IntFilter<"AdGroup"> | number
    frequencyCapUnit?: StringFilter<"AdGroup"> | string
    advertiserId?: StringFilter<"AdGroup"> | string
    campaignId?: StringFilter<"AdGroup"> | string
    createdAt?: DateTimeFilter<"AdGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AdGroup"> | Date | string
  }

  export type AdUpsertWithWhereUniqueWithoutAdvertiserInput = {
    where: AdWhereUniqueInput
    update: XOR<AdUpdateWithoutAdvertiserInput, AdUncheckedUpdateWithoutAdvertiserInput>
    create: XOR<AdCreateWithoutAdvertiserInput, AdUncheckedCreateWithoutAdvertiserInput>
  }

  export type AdUpdateWithWhereUniqueWithoutAdvertiserInput = {
    where: AdWhereUniqueInput
    data: XOR<AdUpdateWithoutAdvertiserInput, AdUncheckedUpdateWithoutAdvertiserInput>
  }

  export type AdUpdateManyWithWhereWithoutAdvertiserInput = {
    where: AdScalarWhereInput
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyWithoutAdvertiserInput>
  }

  export type AdScalarWhereInput = {
    AND?: AdScalarWhereInput | AdScalarWhereInput[]
    OR?: AdScalarWhereInput[]
    NOT?: AdScalarWhereInput | AdScalarWhereInput[]
    id?: StringFilter<"Ad"> | string
    advertiserId?: StringFilter<"Ad"> | string
    adGroupId?: StringFilter<"Ad"> | string
    type?: StringFilter<"Ad"> | string
    url?: StringFilter<"Ad"> | string
    duration?: IntFilter<"Ad"> | number
    width?: IntNullableFilter<"Ad"> | number | null
    height?: IntNullableFilter<"Ad"> | number | null
    mimeType?: StringNullableFilter<"Ad"> | string | null
    clickThroughURL?: StringFilter<"Ad"> | string
    description?: StringNullableFilter<"Ad"> | string | null
    createdAt?: DateTimeFilter<"Ad"> | Date | string
    updatedAt?: DateTimeFilter<"Ad"> | Date | string
  }

  export type AdGroupCreateWithoutCampaignInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdCreateNestedManyWithoutAdGroupInput
    advertiser: AdvertiserCreateNestedOneWithoutAdGroupsInput
  }

  export type AdGroupUncheckedCreateWithoutCampaignInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ads?: AdUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupCreateOrConnectWithoutCampaignInput = {
    where: AdGroupWhereUniqueInput
    create: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput>
  }

  export type AdGroupCreateManyCampaignInputEnvelope = {
    data: AdGroupCreateManyCampaignInput | AdGroupCreateManyCampaignInput[]
  }

  export type AdvertiserCreateWithoutCampaignsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdvertisersInput
    adGroups?: AdGroupCreateNestedManyWithoutAdvertiserInput
    ads?: AdCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateWithoutCampaignsInput = {
    id: string
    name: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutAdvertiserInput
    ads?: AdUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserCreateOrConnectWithoutCampaignsInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutCampaignsInput, AdvertiserUncheckedCreateWithoutCampaignsInput>
  }

  export type AdGroupUpsertWithWhereUniqueWithoutCampaignInput = {
    where: AdGroupWhereUniqueInput
    update: XOR<AdGroupUpdateWithoutCampaignInput, AdGroupUncheckedUpdateWithoutCampaignInput>
    create: XOR<AdGroupCreateWithoutCampaignInput, AdGroupUncheckedCreateWithoutCampaignInput>
  }

  export type AdGroupUpdateWithWhereUniqueWithoutCampaignInput = {
    where: AdGroupWhereUniqueInput
    data: XOR<AdGroupUpdateWithoutCampaignInput, AdGroupUncheckedUpdateWithoutCampaignInput>
  }

  export type AdGroupUpdateManyWithWhereWithoutCampaignInput = {
    where: AdGroupScalarWhereInput
    data: XOR<AdGroupUpdateManyMutationInput, AdGroupUncheckedUpdateManyWithoutCampaignInput>
  }

  export type AdvertiserUpsertWithoutCampaignsInput = {
    update: XOR<AdvertiserUpdateWithoutCampaignsInput, AdvertiserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<AdvertiserCreateWithoutCampaignsInput, AdvertiserUncheckedCreateWithoutCampaignsInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutCampaignsInput, AdvertiserUncheckedUpdateWithoutCampaignsInput>
  }

  export type AdvertiserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdvertisersNestedInput
    adGroups?: AdGroupUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adGroups?: AdGroupUncheckedUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdCreateWithoutAdGroupInput = {
    id: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerCreateNestedManyWithoutAdInput
    advertiser: AdvertiserCreateNestedOneWithoutAdsInput
  }

  export type AdUncheckedCreateWithoutAdGroupInput = {
    id: string
    advertiserId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companionBanners?: CompanionBannerUncheckedCreateNestedManyWithoutAdInput
  }

  export type AdCreateOrConnectWithoutAdGroupInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput>
  }

  export type AdCreateManyAdGroupInputEnvelope = {
    data: AdCreateManyAdGroupInput | AdCreateManyAdGroupInput[]
  }

  export type AdvertiserCreateWithoutAdGroupsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdvertisersInput
    campaigns?: CampaignCreateNestedManyWithoutAdvertiserInput
    ads?: AdCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateWithoutAdGroupsInput = {
    id: string
    name: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAdvertiserInput
    ads?: AdUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserCreateOrConnectWithoutAdGroupsInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutAdGroupsInput, AdvertiserUncheckedCreateWithoutAdGroupsInput>
  }

  export type CampaignCreateWithoutAdGroupsInput = {
    id: string
    name: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutAdGroupsInput = {
    id: string
    name: string
    advertiserId: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutAdGroupsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutAdGroupsInput, CampaignUncheckedCreateWithoutAdGroupsInput>
  }

  export type AdUpsertWithWhereUniqueWithoutAdGroupInput = {
    where: AdWhereUniqueInput
    update: XOR<AdUpdateWithoutAdGroupInput, AdUncheckedUpdateWithoutAdGroupInput>
    create: XOR<AdCreateWithoutAdGroupInput, AdUncheckedCreateWithoutAdGroupInput>
  }

  export type AdUpdateWithWhereUniqueWithoutAdGroupInput = {
    where: AdWhereUniqueInput
    data: XOR<AdUpdateWithoutAdGroupInput, AdUncheckedUpdateWithoutAdGroupInput>
  }

  export type AdUpdateManyWithWhereWithoutAdGroupInput = {
    where: AdScalarWhereInput
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyWithoutAdGroupInput>
  }

  export type AdvertiserUpsertWithoutAdGroupsInput = {
    update: XOR<AdvertiserUpdateWithoutAdGroupsInput, AdvertiserUncheckedUpdateWithoutAdGroupsInput>
    create: XOR<AdvertiserCreateWithoutAdGroupsInput, AdvertiserUncheckedCreateWithoutAdGroupsInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutAdGroupsInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutAdGroupsInput, AdvertiserUncheckedUpdateWithoutAdGroupsInput>
  }

  export type AdvertiserUpdateWithoutAdGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdvertisersNestedInput
    campaigns?: CampaignUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutAdGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type CampaignUpsertWithoutAdGroupsInput = {
    update: XOR<CampaignUpdateWithoutAdGroupsInput, CampaignUncheckedUpdateWithoutAdGroupsInput>
    create: XOR<CampaignCreateWithoutAdGroupsInput, CampaignUncheckedCreateWithoutAdGroupsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutAdGroupsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutAdGroupsInput, CampaignUncheckedUpdateWithoutAdGroupsInput>
  }

  export type CampaignUpdateWithoutAdGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutAdGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerCreateWithoutAdInput = {
    id: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionBannerUncheckedCreateWithoutAdInput = {
    id: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionBannerCreateOrConnectWithoutAdInput = {
    where: CompanionBannerWhereUniqueInput
    create: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput>
  }

  export type CompanionBannerCreateManyAdInputEnvelope = {
    data: CompanionBannerCreateManyAdInput | CompanionBannerCreateManyAdInput[]
  }

  export type AdvertiserCreateWithoutAdsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdvertisersInput
    campaigns?: CampaignCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateWithoutAdsInput = {
    id: string
    name: string
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutAdvertiserInput
    adGroups?: AdGroupUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserCreateOrConnectWithoutAdsInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutAdsInput, AdvertiserUncheckedCreateWithoutAdsInput>
  }

  export type AdGroupCreateWithoutAdsInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutAdGroupsInput
    campaign: CampaignCreateNestedOneWithoutAdGroupsInput
  }

  export type AdGroupUncheckedCreateWithoutAdsInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdGroupCreateOrConnectWithoutAdsInput = {
    where: AdGroupWhereUniqueInput
    create: XOR<AdGroupCreateWithoutAdsInput, AdGroupUncheckedCreateWithoutAdsInput>
  }

  export type CompanionBannerUpsertWithWhereUniqueWithoutAdInput = {
    where: CompanionBannerWhereUniqueInput
    update: XOR<CompanionBannerUpdateWithoutAdInput, CompanionBannerUncheckedUpdateWithoutAdInput>
    create: XOR<CompanionBannerCreateWithoutAdInput, CompanionBannerUncheckedCreateWithoutAdInput>
  }

  export type CompanionBannerUpdateWithWhereUniqueWithoutAdInput = {
    where: CompanionBannerWhereUniqueInput
    data: XOR<CompanionBannerUpdateWithoutAdInput, CompanionBannerUncheckedUpdateWithoutAdInput>
  }

  export type CompanionBannerUpdateManyWithWhereWithoutAdInput = {
    where: CompanionBannerScalarWhereInput
    data: XOR<CompanionBannerUpdateManyMutationInput, CompanionBannerUncheckedUpdateManyWithoutAdInput>
  }

  export type CompanionBannerScalarWhereInput = {
    AND?: CompanionBannerScalarWhereInput | CompanionBannerScalarWhereInput[]
    OR?: CompanionBannerScalarWhereInput[]
    NOT?: CompanionBannerScalarWhereInput | CompanionBannerScalarWhereInput[]
    id?: StringFilter<"CompanionBanner"> | string
    adId?: StringFilter<"CompanionBanner"> | string
    url?: StringFilter<"CompanionBanner"> | string
    width?: IntFilter<"CompanionBanner"> | number
    height?: IntFilter<"CompanionBanner"> | number
    mimeType?: StringNullableFilter<"CompanionBanner"> | string | null
    clickThroughURL?: StringNullableFilter<"CompanionBanner"> | string | null
    createdAt?: DateTimeFilter<"CompanionBanner"> | Date | string
    updatedAt?: DateTimeFilter<"CompanionBanner"> | Date | string
  }

  export type AdvertiserUpsertWithoutAdsInput = {
    update: XOR<AdvertiserUpdateWithoutAdsInput, AdvertiserUncheckedUpdateWithoutAdsInput>
    create: XOR<AdvertiserCreateWithoutAdsInput, AdvertiserUncheckedCreateWithoutAdsInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutAdsInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutAdsInput, AdvertiserUncheckedUpdateWithoutAdsInput>
  }

  export type AdvertiserUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdvertisersNestedInput
    campaigns?: CampaignUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdGroupUpsertWithoutAdsInput = {
    update: XOR<AdGroupUpdateWithoutAdsInput, AdGroupUncheckedUpdateWithoutAdsInput>
    create: XOR<AdGroupCreateWithoutAdsInput, AdGroupUncheckedCreateWithoutAdsInput>
    where?: AdGroupWhereInput
  }

  export type AdGroupUpdateToOneWithWhereWithoutAdsInput = {
    where?: AdGroupWhereInput
    data: XOR<AdGroupUpdateWithoutAdsInput, AdGroupUncheckedUpdateWithoutAdsInput>
  }

  export type AdGroupUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdGroupsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type AdGroupUncheckedUpdateWithoutAdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdCreateWithoutCompanionBannersInput = {
    id: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutAdsInput
    adGroup: AdGroupCreateNestedOneWithoutAdsInput
  }

  export type AdUncheckedCreateWithoutCompanionBannersInput = {
    id: string
    advertiserId: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdCreateOrConnectWithoutCompanionBannersInput = {
    where: AdWhereUniqueInput
    create: XOR<AdCreateWithoutCompanionBannersInput, AdUncheckedCreateWithoutCompanionBannersInput>
  }

  export type AdUpsertWithoutCompanionBannersInput = {
    update: XOR<AdUpdateWithoutCompanionBannersInput, AdUncheckedUpdateWithoutCompanionBannersInput>
    create: XOR<AdCreateWithoutCompanionBannersInput, AdUncheckedCreateWithoutCompanionBannersInput>
    where?: AdWhereInput
  }

  export type AdUpdateToOneWithWhereWithoutCompanionBannersInput = {
    where?: AdWhereInput
    data: XOR<AdUpdateWithoutCompanionBannersInput, AdUncheckedUpdateWithoutCompanionBannersInput>
  }

  export type AdUpdateWithoutCompanionBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdsNestedInput
    adGroup?: AdGroupUpdateOneRequiredWithoutAdsNestedInput
  }

  export type AdUncheckedUpdateWithoutCompanionBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateManyUserInput = {
    id: string
    organizationId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembershipNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipCreateManyOrganizationInput = {
    id: string
    userId: string
    role: string
    permissions: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdvertiserCreateManyOrganizationInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaCreateManyOrganizationInput = {
    id: string
    name: string
    categories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationMembershipUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipNestedInput
  }

  export type OrganizationMembershipUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMembershipUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    permissions?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutAdvertiserNestedInput
    adGroups?: AdGroupUncheckedUpdateManyWithoutAdvertiserNestedInput
    ads?: AdUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adSlots?: AdSlotUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adSlots?: AdSlotUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdSlotCreateManyMediaInput = {
    id: string
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdSlotUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionSlots?: CompanionSlotUpdateManyWithoutAdSlotNestedInput
  }

  export type AdSlotUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionSlots?: CompanionSlotUncheckedUpdateManyWithoutAdSlotNestedInput
  }

  export type AdSlotUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotCreateManyAdSlotInput = {
    id: string
    name: string
    width: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionSlotUpdateWithoutAdSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotUncheckedUpdateWithoutAdSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionSlotUncheckedUpdateManyWithoutAdSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyAdvertiserInput = {
    id: string
    name: string
    startAt: Date | string
    endAt: Date | string
    budget?: Decimal | DecimalJsLike | number | string
    budgetType: string
    deliveryPace: string
    spentBudget?: Decimal | DecimalJsLike | number | string
    remainingBudget?: Decimal | DecimalJsLike | number | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdGroupCreateManyAdvertiserInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdCreateManyAdvertiserInput = {
    id: string
    adGroupId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adGroups?: AdGroupUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adGroups?: AdGroupUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    budgetType?: StringFieldUpdateOperationsInput | string
    deliveryPace?: StringFieldUpdateOperationsInput | string
    spentBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remainingBudget?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdGroupUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUpdateManyWithoutAdGroupNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type AdGroupUncheckedUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupUncheckedUpdateManyWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUpdateManyWithoutAdNestedInput
    adGroup?: AdGroupUpdateOneRequiredWithoutAdsNestedInput
  }

  export type AdUncheckedUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateManyWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adGroupId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdGroupCreateManyCampaignInput = {
    id: string
    name: string
    categories?: string | null
    bidPriceCPM: Decimal | DecimalJsLike | number | string
    frequencyCapImpressions: number
    frequencyCapWindow: number
    frequencyCapUnit: string
    advertiserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdGroupUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUpdateManyWithoutAdGroupNestedInput
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type AdGroupUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ads?: AdUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categories?: NullableStringFieldUpdateOperationsInput | string | null
    bidPriceCPM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequencyCapImpressions?: IntFieldUpdateOperationsInput | number
    frequencyCapWindow?: IntFieldUpdateOperationsInput | number
    frequencyCapUnit?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdCreateManyAdGroupInput = {
    id: string
    advertiserId: string
    type: string
    url: string
    duration: number
    width?: number | null
    height?: number | null
    mimeType?: string | null
    clickThroughURL: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdUpdateWithoutAdGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUpdateManyWithoutAdNestedInput
    advertiser?: AdvertiserUpdateOneRequiredWithoutAdsNestedInput
  }

  export type AdUncheckedUpdateWithoutAdGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companionBanners?: CompanionBannerUncheckedUpdateManyWithoutAdNestedInput
  }

  export type AdUncheckedUpdateManyWithoutAdGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerCreateManyAdInput = {
    id: string
    url: string
    width: number
    height: number
    mimeType?: string | null
    clickThroughURL?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionBannerUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerUncheckedUpdateWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionBannerUncheckedUpdateManyWithoutAdInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    clickThroughURL?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}