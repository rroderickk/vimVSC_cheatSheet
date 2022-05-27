
# Hash router

```js
import { HashRouter as Router,Switch,Route } from "react-router-dom";

<Router>
  <Switch>
    <Route path="/" handler={Home} />

    <Route path="/about">
      <About/>
    <Route />

  </Switch>
</Router>
```