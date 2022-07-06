- [Developer Guide](#developer-guide)
  - [Migration from React](#migration-from-react)
    - [`react-helmet` to `next-seo`](#react-helmet-to-next-seo)
    - [`react-notifications-component` to `react-hot-toast`](#react-notifications-component-to-react-hot-toast)
    - [`react-router-dom` to `next/link`](#react-router-dom-to-nextlink)
    - [`react-router` to `next/router`](#react-router-to-nextrouter)
    - [static imported `img` to `next/image`](#static-imported-img-to-nextimage)
    - [`makeStyles` to Mui v5 `sx`](#makestyles-to-mui-v5-sx)
    - [`withStyles` to Mui v5 `sx`](#withstyles-to-mui-v5-sx)
- [TODO:](#todo)
  - [Pages](#pages)
  - [Features](#features)
  - [Infrastructure](#infrastructure)

# Developer Guide

## Migration from React

Here are some library that requires to migrate

### `react-helmet` to `next-seo`

Please check this [doc](https://github.com/garmeeh/next-seo)

### `react-notifications-component` to `react-hot-toast`

Before: `react-notification-component`

```javascript
import { store as notifStore } from "react-notifications-component";

notifStore.addNotification({
  message: error.message,
  type: "warning",
  insert: "top",
  container: "top-center",
  animationIn: ["animated", "fadeIn"],
  dismiss: {
    duration: 4000,
  },
});
```

After: `react-hot-toast`

```javascript
import toast from "react-hot-toast";

toast.error(error.message);
```

### `react-router-dom` to `next/link`

Before: `react-router-dom`

```javascript
import { Link } from 'react-router-dom';

const MyLink = ()=> (
    <Link to={...}>
        My Link
    </Link>
);
```

After: `next/link`

```javascript
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';

const MyLink = ()=> (
    <Link href={...} passHref>
        <MuiLink>
            My Link
        </MuiLink>
    </Link>
);
```

### `react-router` to `next/router`

Before:

```javascript
import { withRouter } from "react-router";

const Component = ({ history }) => <div>{history.location.pathname}</div>;

export default withRouter(Component);
```

After:

```javascript
import { withRouter } from "next/router";

const Component = ({ router }) => <div>{router.asPath}</div>;

export default withRouter(Component);
```

### static imported `img` to `next/image`

Before:

```javascript
import TestImage from "./test.png";

const MyImage = () => <img src={TestImage} />;
```

After:

```javascript
// move the image to /public folder
import Image from "next/image";

import TestImage from "../../../public/test.png";

const MyImage = () => <Image src={TestImage} />;
```

### `makeStyles` to Mui v5 `sx`

Before: `makeStyles`

```javascript
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));

const MyStyledDiv = () => {
  const classes = useStyles();
  return <Box className={classes.root} />;
};
```

After: `sx`

```javascript
const StyleFn = (theme) => ({ position: 'relative' })

const MyStyledDiv = () => (
    <Box sx={StyleFn} />
);

// or

const MyStyledDiv = () => (
    <Box sx={(theme) => ({ position: 'relative' })} />
);
```

### `withStyles` to Mui v5 `sx`

Before: `makeStyles`

```javascript


const MyStyledDiv = withStyles((theme) => ({
  root: {
    position: 'relative',
  },
})(({ classes }) => (
    <Box className={classes.root} />
);
```

After: `sx`

```javascript
const StyleFn = (theme) => ({ position: 'relative' })

const MyStyledDiv = () => (
    <Box sx={StyleFn} />
);

// or

const MyStyledDiv = () => (
    <Box sx={(theme) => ({ position: 'relative' })} />
);
```
