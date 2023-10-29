// MIT License

// Copyright (c) 2022 ecyrbe

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Modified by DWJ
// Removed path prefix to allow mergeApis

import { makeApi } from "@zodios/core";
import { z } from "zod";

/**
 * set first letter of a string to uppercase
 * @param str - the string to capitalize
 * @returns - the string with the first letter uppercased
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}

/**
 * Helper to generate a basic CRUD api for a given resource
 * @param resource - the resource to generate the api for
 * @param schema - the schema of the resource
 * @returns - the api definitions
 */
export function makeCrudApi<
  T extends string,
  S extends z.ZodObject<z.ZodRawShape>
>(resource: T, schema: S) {
  type Schema = z.input<S>;
  const capitalizedResource = capitalize(resource);
  return makeApi([
    {
      method: "get",
      path: `/`,
      // @ts-expect-error
      alias: `get${capitalizedResource}s`,
      description: `Get all ${resource}s`,
      response: z.array(schema),
    },
    {
      method: "get",
      path: `/:id`,
      // @ts-expect-error
      alias: `get${capitalizedResource}`,
      description: `Get a ${resource}`,
      // @ts-expect-error
      response: schema,
    },
    {
      method: "post",
      path: `/`,
      // @ts-expect-error
      alias: `create${capitalizedResource}`,
      description: `Create a ${resource}`,
      parameters: [
        {
          name: "body",
          type: "Body",
          description: "The object to create",
          schema: schema.partial() as z.Schema<Partial<Schema>>,
        },
      ],
      // @ts-expect-error
      response: schema,
    },
    {
      method: "put",
      path: `/:id`,
      // @ts-expect-error
      alias: `update${capitalizedResource}`,
      description: `Update a ${resource}`,
      parameters: [
        {
          name: "body",
          type: "Body",
          description: "The object to update",
          // @ts-expect-error
          schema: schema,
        },
      ],
      // @ts-expect-error
      response: schema,
    },
    {
      method: "patch",
      path: `/:id`,
      // @ts-expect-error
      alias: `patch${capitalizedResource}`,
      description: `Patch a ${resource}`,
      parameters: [
        {
          name: "body",
          type: "Body",
          description: "The object to patch",
          schema: schema.partial() as z.Schema<Partial<Schema>>,
        },
      ],
      // @ts-expect-error
      response: schema,
    },
    {
      method: "delete",
      path: `/:id`,
      // @ts-expect-error
      alias: `delete${capitalizedResource}`,
      description: `Delete a ${resource}`,
      // @ts-expect-error
      response: schema,
    },
  ]);
}
