```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello, world!</div>
  );
}
```

This code will work correctly in Next.js 13 and below, but will cause an unexpected error in Next.js 15 (or above) if you try to access the `req` or `res` objects within the `Home` component directly.  In Next.js 15, these objects are only available within API routes or middleware.