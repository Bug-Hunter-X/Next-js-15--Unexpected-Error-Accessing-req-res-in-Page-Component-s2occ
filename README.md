# Next.js 15: Unexpected Error Accessing 'req' and 'res' Objects in Page Components

This repository demonstrates a subtle bug introduced in Next.js 15 (or later) that affects how you access request and response objects (`req` and `res`) within page components.  Prior versions permitted direct access, resulting in unexpected behaviour or errors in Next.js 15.

## Problem

Attempting to directly access the `req` or `res` objects within a page component function in Next.js 15 results in an error.  The objects are only accessible within API routes or middleware functions. This change can break existing code that relied on implicit access.

## Solution

The solution is to move any logic requiring `req` or `res` to an API route or use middleware.  This ensures proper handling of the request and response objects within the appropriate Next.js context.