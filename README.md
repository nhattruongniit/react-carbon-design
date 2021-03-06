# React carbon design system

## Features

- Show pagination
- Change themes by carbon design UI

## UI

- UI Carbon components react

## Stack

- Redux, Redux thunk
- style-components
- axios

## Scripts

Please install json-server first:

```bash
yarn global add json-server
```

```bash
# run dev
$ yarn start

# run mock data
$ yarn run json-server
```

## Pagination

<image src="./image-pagination.png" />
binding: `{offset + 1} - {offset + limit} of {totalItems}`

- page: currentPage. Start from number 1.
- pageSize: items of per page. Maybe call is "limit".
- offSet: index of first page at currentPage.
- totalItems: total items.

E.g:

totalItems: 50 item.

item per page (pageSize): x = 10.

page: 1.

Formula: n items per page.

start = (n - 1) \* x;

end = start + x;

items.slice(start, end);
