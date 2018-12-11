"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var prisma_client_1 = require("./generated/prisma-client");
// A `main` function so that we can use async/await
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var allPosts, newPost, updatedPost, postsByUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma_client_1.prisma.posts({
                        where: { published: true }
                    })];
                case 1:
                    allPosts = _a.sent();
                    console.log("Retrieved all published posts: ", allPosts);
                    return [4 /*yield*/, prisma_client_1.prisma.createPost({
                            title: 'Join the Prisma Slack community',
                            content: 'http://slack.prisma.io',
                            author: {
                                connect: {
                                    email: 'alice@prisma.io'
                                }
                            }
                        })];
                case 2:
                    newPost = _a.sent();
                    console.log("Created a new post: ", newPost);
                    return [4 /*yield*/, prisma_client_1.prisma.updatePost({
                            where: {
                                id: newPost.id
                            },
                            data: {
                                published: true
                            }
                        })];
                case 3:
                    updatedPost = _a.sent();
                    console.log("Published the newly created post: ", updatedPost);
                    return [4 /*yield*/, prisma_client_1.prisma
                            .user({
                            email: 'alice@prisma.io'
                        })
                            .posts()];
                case 4:
                    postsByUser = _a.sent();
                    console.log("Retrieved all posts from a specific user: ", postsByUser);
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () {
    process.exit(0);
})["catch"](function (e) { return console.error(e); });
//# sourceMappingURL=script.js.map