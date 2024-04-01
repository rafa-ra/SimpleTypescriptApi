"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(201).json({
        message: "Got it !",
    });
});
router.post("/create-post", (req, res, next) => {
    const body = req.body;
    const { author, text } = body;
    res.status(200).json({
        author: author,
        text: text,
    });
});
exports.default = router;
