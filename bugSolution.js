```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello!' });
}
```

```javascript
// pages/index.js
import useSWR from 'swr';

export default function Home() {
  const { data, error } = useSWR('/api/hello', (url) => fetch(url).then((r) => r.json()));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>Hello, world! {data.text}</div>
  );
}
```