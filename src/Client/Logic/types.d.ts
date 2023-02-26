/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Aug 01 2022
 * @Email blackxes.dev@gmail.com
 */

/**
 * Returns the type inside an array inside an object (T) of a key (I)
 * @example { "bla" => MyType[] }
 * 	GetObjectElementType<"bla"> => returns MyType
 * @example { "wusa" => AnotherType[], "sick" => Kiki[] }
 *  GetObjectElementType<"wusa"> => returns AnotherType
 * 	GetObjectElementType<"sick"> => returns Kiki
 */
type GetObjectElementType<
    Dictionary,
    Key extends keyof Dictionary
> = Dictionary[Key] extends (infer ItemType)[] ? ItemType : never;

/**
 * Returns the type inside an array
 */
type GetElementType<T extends any[]> = T extends (infer I)[] ? I : never;

/**
 * Returns the values of an array as types
 */
type Values<T> = T[keyof T];
