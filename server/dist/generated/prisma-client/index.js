"use strict";
// Code generated by Prisma (prisma@1.22.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
exports.__esModule = true;
var prisma_client_lib_1 = require("prisma-client-lib");
var prisma_schema_1 = require("./prisma-schema");
/**
 * Model Metadata
 */
exports.models = [
    {
        name: "User",
        embedded: false
    }
];
/**
 * Type Defs
 */
exports.Prisma = prisma_client_lib_1.makePrismaClientClass({
    typeDefs: prisma_schema_1.typeDefs,
    models: exports.models,
    endpoint: "http://localhost:4466"
});
exports.prisma = new exports.Prisma();
//# sourceMappingURL=index.js.map