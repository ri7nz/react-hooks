# web-api-hooks

Essential set of [React Hooks] for convenient [Web API] consumption.

[react hooks]: https://reactjs.org/docs/hooks-intro.html
[web api]: https://developer.mozilla.org/docs/Web/API

## Key features

Being part of the [@kripod/react-hooks] project, this package is:

- 🌳 **Bundler-friendly** with tree shaking support
- 📚 **Well-documented** and type-safe interfaces
- ⚛️ **Zero-config** server-side rendering capability
- 📦 **Self-contained**, free of runtime dependencies

[@kripod/react-hooks]: https://github.com/kripod/react-hooks

## Usage

After installing the package, import individual hooks as shown below:

```javascript
import { useGeolocation, useLocalStorage } from 'web-api-hooks';
```

## Sandbox

[👉 Explore the API with working examples](https://codesandbox.io/s/focused-cookies-gt5rt)

## Reference

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Sensors](#sensors)
  - [useDeviceMotion](#usedevicemotion)
  - [useDeviceOrientation](#usedeviceorientation)
  - [useDocumentReadiness](#usedocumentreadiness)
  - [useDocumentVisibility](#usedocumentvisibility)
  - [useGeolocation](#usegeolocation)
  - [useMedia](#usemedia)
  - [useMouseCoords](#usemousecoords)
  - [useNetworkAvailability](#usenetworkavailability)
  - [useNetworkInformation](#usenetworkinformation)
  - [usePreferredColorScheme](#usepreferredcolorscheme)
  - [usePreferredLanguages](#usepreferredlanguages)
  - [useViewportScale](#useviewportscale)
  - [useViewportScrollCoords](#useviewportscrollcoords)
  - [useViewportSize](#useviewportsize)
  - [useWindowScrollCoords](#usewindowscrollcoords)
  - [useWindowSize](#usewindowsize)
- [Storage](#storage)
  - [useLocalStorage](#uselocalstorage)
  - [useSessionStorage](#usesessionstorage)
- [Scheduling](#scheduling)
  - [useEventListener](#useeventlistener)
  - [useInterval](#useinterval)

### Sensors

#### useDeviceMotion

Tracks acceleration and rotation rate of the device.

##### Examples

```javascript
function Component() {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  // ...
}
```

Returns **EventArgs&lt;[DeviceMotionEvent](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent)>** Own properties of the last corresponding event.

#### useDeviceOrientation

Tracks physical orientation of the device.

##### Examples

```javascript
function Component() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  // ...
}
```

Returns **EventArgs&lt;[DeviceOrientationEvent](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent)>** Own properties of the last corresponding event.

#### useDocumentReadiness

Tracks loading state of the page.

##### Examples

```javascript
function Component() {
  const documentReadiness = useDocumentReadiness();
  if (documentReadiness === 'interactive') {
    // You may interact with any element of the document from now
  }
  // ...
}
```

Returns **[DocumentReadyState](https://developer.mozilla.org/docs/Web/API/Document/readyState)** Readiness of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'loading'` by default.

#### useDocumentVisibility

Tracks visibility of the page.

##### Examples

```javascript
function Component() {
  const documentVisibility = useDocumentVisibility();
  if (documentVisibility === 'hidden') {
    // Reduce resource utilization to aid background page performance
  }
  // ...
}
```

Returns **[VisibilityState](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)** Visibility state of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'visible'` by default.

#### useGeolocation

Tracks geolocation of the device.

##### Parameters

- `options` **[PositionOptions](https://developer.mozilla.org/docs/Web/API/PositionOptions)?** Additional watching options.
- `errorCallback` **function (error: [PositionError](https://developer.mozilla.org/docs/Web/API/PositionError)): void?** Method to execute in case of an error, e.g. when the user denies location sharing permissions.

##### Examples

```javascript
function Component() {
  const geolocation = useGeolocation();
  if (geolocation) {
    const { coords } = geolocation;
  }
  // ...
}
```

Returns **([Position](https://developer.mozilla.org/docs/Web/API/Position) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Locational data, or `undefined` when unavailable.

#### useMedia

Tracks match state of a media query.

##### Parameters

- `query` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Media query to parse.

##### Examples

```javascript
function Component() {
  const isWidescreen = useMedia('(min-aspect-ratio: 16/9)');
  // ...
}
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if the associated media query list matches the state of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), or `false` otherwise.

#### useMouseCoords

Tracks mouse position.

##### Examples

```javascript
function Component() {
  const [mouseX, mouseY] = useMouseCoords();
  // ...
}
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useNetworkAvailability

Tracks information about the network's availability.

⚠️ _This attribute is inherently unreliable. A computer can be connected to a network without having internet access._

##### Examples

```javascript
function Component() {
  const isOnline = useNetworkAvailability();
  // ...
}
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `false` if the user agent is definitely offline, or `true` if it might be online.

#### useNetworkInformation

Tracks information about the device's network connection.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
function Component() {
  const networkInformation = useNetworkInformation();
  if (networkInformation) {
    const { effectiveType, downlink, rtt, saveData } = networkInformation;
  }
  // ...
}
```

Returns **([NetworkInformation](https://developer.mozilla.org/docs/Web/API/NetworkInformation) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Connection data, or `undefined` when unavailable.

#### usePreferredColorScheme

Tracks color scheme preference of the user.

##### Examples

```javascript
function Component() {
  const preferredColorScheme = usePreferredColorScheme();
  const isDarkMode = usePreferredColorScheme() === 'dark';
  // ...
}
```

Returns **(`"no-preference"` \| `"light"` \| `"dark"`)** Preferred color scheme.

#### usePreferredLanguages

Tracks language preferences of the user.

##### Examples

```javascript
function Component() {
  const preferredLanguages = usePreferredLanguages();
  // ...
}
```

Returns **ReadonlyArray&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** An array of [BCP 47](https://tools.ietf.org/html/bcp47) language tags, ordered by preference with the most preferred language first.

#### useViewportScale

Tracks visual viewport scale.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
function Component() {
  const viewportScale = useViewportScale();
  // ...
}
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Pinch-zoom scaling factor, falling back to `0` when unavailable.

#### useViewportScrollCoords

Tracks visual viewport scroll position.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
function Component() {
  const [viewportScrollX, viewportScrollY] = useViewportScrollCoords();
  // ...
}
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useViewportSize

Tracks visual viewport size.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
function Component() {
  const [viewportWidth, viewportHeight] = useViewportSize();
  // ...
}
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Dimensions `[width, height]`, falling back to `[0, 0]` when unavailable.

#### useWindowScrollCoords

Tracks window scroll position.

##### Examples

```javascript
function Component() {
  const [windowScrollX, windowScrollY] = useWindowScrollCoords();
  // ...
}
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useWindowSize

Tracks window size.

##### Examples

```javascript
function Component() {
  const [windowWidth, windowHeight] = useWindowSize();
  // ...
}
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Dimensions `[width, height]`, falling back to `[0, 0]` when unavailable.

### Storage

#### useLocalStorage

- **See: [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface**

Stores a key/value pair statefully in [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage).

##### Parameters

- `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier to associate the stored value with.
- `initialValue` **(T | function (): T | null)** Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value. (optional, default `null`)
- `errorCallback` **function (error: (DOMException | [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError))): void?** Method to execute in case of an error, e.g. when the storage quota has been exceeded or trying to store a circular data structure.

##### Examples

```javascript
function Component() {
  const [visitCount, setVisitCount] =
    useLocalStorage < number > ('visitCount', 0);
  useEffect(() => {
    setVisitCount(count => count + 1);
  }, []);
  // ...
}
```

Returns **\[T, React.Dispatch&lt;React.SetStateAction&lt;T>>]** A statefully stored value, and a function to update it.

#### useSessionStorage

- **See: [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface**

Stores a key/value pair statefully in [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage).

##### Parameters

- `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier to associate the stored value with.
- `initialValue` **(T | function (): T | null)** Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value. (optional, default `null`)
- `errorCallback` **function (error: (DOMException | [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError))): void?** Method to execute in case of an error, e.g. when the storage quota has been exceeded or trying to store a circular data structure.

##### Examples

```javascript
function Component() {
  const [name, setName] = useSessionStorage < string > ('name', 'Anonymous');
  // ...
}
```

Returns **\[T, React.Dispatch&lt;React.SetStateAction&lt;T>>]** A statefully stored value, and a function to update it.

### Scheduling

#### useEventListener

- **See: [Event reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)**

Listens to an event while the enclosing component is mounted.

##### Parameters

- `target` **[EventTarget](https://developer.mozilla.org/docs/Web/API/EventTarget)** Target to listen on, possibly a DOM element or a remote service connector.
- `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of event (case-sensitive).
- `callback` **[EventListener](https://developer.mozilla.org/docs/Web/API/EventListener)** Method to execute whenever the event fires.
- `options` **AddEventListenerOptions?** Additional listener characteristics.

##### Examples

```javascript
function Component() {
  useEventListener(window, 'error', () => {
    console.log('A resource failed to load.');
  });
  // ...
}
```

#### useInterval

Repeatedly calls a function with a fixed time delay between each call.

📝 _Timings may be inherently inaccurate, due to the implementation of [`setInterval`](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) under the hood._

##### Parameters

- `callback` **function (): void** Method to execute periodically.
- `delayMs` **([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)** Time, in milliseconds, to wait between executions of the specified function. Set to `null` for pausing.

##### Examples

```javascript
function Component() {
  useInterval(() => {
    // Custom logic to execute each second
  }, 1000);
  // ...
}
```

## Performance tips

- Avoid layout thrashing by [debouncing or throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) high frequency events, e.g. scrolling or mouse movements
- Move non-primitive hook parameters to an outer scope or memoize them with [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo), e.g.:

  ```tsx
  const geolocationOptions = { enableHighAccuracy: true };
  function Component() {
    const geolocation = useGeolocation(geolocationOptions);
    // ...
  }
  ```
