# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.29](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.28...@thi.ng/rstream-gestures@2.0.29) (2020-07-08)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.28](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.27...@thi.ng/rstream-gestures@2.0.28) (2020-07-08)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.27](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.26...@thi.ng/rstream-gestures@2.0.27) (2020-07-04)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.26](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.25...@thi.ng/rstream-gestures@2.0.26) (2020-07-02)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.25](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.24...@thi.ng/rstream-gestures@2.0.25) (2020-06-20)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.24](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.23...@thi.ng/rstream-gestures@2.0.24) (2020-06-14)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.23](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.22...@thi.ng/rstream-gestures@2.0.23) (2020-06-01)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.22](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.21...@thi.ng/rstream-gestures@2.0.22) (2020-06-01)

**Note:** Version bump only for package @thi.ng/rstream-gestures





## [2.0.21](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@2.0.20...@thi.ng/rstream-gestures@2.0.21) (2020-05-29)

**Note:** Version bump only for package @thi.ng/rstream-gestures





# [2.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@1.3.0...@thi.ng/rstream-gestures@2.0.0) (2020-01-24)

### Bug Fixes

* **rstream-gestures:** remove duplicate MOVE events ([0c8da9b](https://github.com/thi-ng/umbrella/commit/0c8da9b235be37082f514b515917b82a630095d0))
* fixed the bug allowing the user to drag without pressing anything and improved types ([e5a9996](https://github.com/thi-ng/umbrella/commit/e5a9996b73a6284b115d7ef601f3b032a1bdc3fb))

### Features

* **rstream-gestures:** add multitouch support, almost complete pkg rewrite ([031d89b](https://github.com/thi-ng/umbrella/commit/031d89bd3ada19c5aee158545bfec11e06a70a5f))
* **rstream-gestures:** update deps, zoom delta calc, GestureInfo ([6bbbd55](https://github.com/thi-ng/umbrella/commit/6bbbd550e2d29e183a8a23447f003f9e31589112))

### BREAKING CHANGES

* **rstream-gestures:** New `GestureEvent` & `GestureInfo` data formats,
add multitouch support

# [1.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@1.2.6...@thi.ng/rstream-gestures@1.3.0) (2019-11-30)

### Features

* **rstream-gestures:** add `buttons` to GestureInfo ([2d837e2](https://github.com/thi-ng/umbrella/commit/2d837e2858754f50e24afc1f939755d1a3096d43))

# [1.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@1.1.4...@thi.ng/rstream-gestures@1.2.0) (2019-07-07)

### Features

* **rstream-gestures:** enable TS strict compiler flags (refactor) ([412dd46](https://github.com/thi-ng/umbrella/commit/412dd46))

# [1.1.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@1.0.21...@thi.ng/rstream-gestures@1.1.0) (2019-04-11)

### Features

* **rstream-gestures:** add zoomDelta output ([68c4b45](https://github.com/thi-ng/umbrella/commit/68c4b45))

# [1.0.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.6.9...@thi.ng/rstream-gestures@1.0.0) (2019-01-21)

### Bug Fixes

* **rstream-gestures:** disable __GestureType reverse enum export ([19449e8](https://github.com/thi-ng/umbrella/commit/19449e8))

### Build System

* update package scripts, outputs, imports in remaining packages ([f912a84](https://github.com/thi-ng/umbrella/commit/f912a84))

### BREAKING CHANGES

* enable multi-outputs (ES6 modules, CJS, UMD)

- build scripts now first build ES6 modules in package root, then call
  `scripts/bundle-module` to build minified CJS & UMD bundles in `/lib`
- all imports MUST be updated to only refer to package level
  (not individual files anymore). tree shaking in user land will get rid of
  all unused imported symbols

# [0.6.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.5.18...@thi.ng/rstream-gestures@0.6.0) (2018-11-24)

### Features

* **rstream-gestures:** add absZoom option (abs vs. relative) ([bab55c3](https://github.com/thi-ng/umbrella/commit/bab55c3))

## [0.5.16](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.5.15...@thi.ng/rstream-gestures@0.5.16) (2018-10-24)

### Bug Fixes

* **rstream-gestures:** fix incorrect local position when scrolled ([f1f6af4](https://github.com/thi-ng/umbrella/commit/f1f6af4))

<a name="0.5.10"></a>
## [0.5.10](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.5.9...@thi.ng/rstream-gestures@0.5.10) (2018-09-24)

### Performance Improvements

* **rstream-gestures:** `GestureType` => const enum ([8e4fc90](https://github.com/thi-ng/umbrella/commit/8e4fc90))

<a name="0.5.0"></a>
# [0.5.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.4.18...@thi.ng/rstream-gestures@0.5.0) (2018-08-27)

### Features

* **rstream-gestures:** add options for local & scaled positions ([ccc40a9](https://github.com/thi-ng/umbrella/commit/ccc40a9))

<a name="0.4.6"></a>
## [0.4.6](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.4.5...@thi.ng/rstream-gestures@0.4.6) (2018-07-13)

### Bug Fixes

* **rstream-gestures:** touchevent check in safari ([ee48a94](https://github.com/thi-ng/umbrella/commit/ee48a94))

<a name="0.4.0"></a>
# [0.4.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.3.16...@thi.ng/rstream-gestures@0.4.0) (2018-07-04)

### Features

* **rstream-gestures:** add event & preventDefault opts, update docs ([de17340](https://github.com/thi-ng/umbrella/commit/de17340))

<a name="0.3.16"></a>
## [0.3.16](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.3.15...@thi.ng/rstream-gestures@0.3.16) (2018-07-03)

<a name="0.3.0"></a>
# [0.3.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.2.5...@thi.ng/rstream-gestures@0.3.0) (2018-05-09)

### Features

* **rstream-gestures:** add zoom smooth config option, update readme ([053c8c6](https://github.com/thi-ng/umbrella/commit/053c8c6))

<a name="0.2.0"></a>
# [0.2.0](https://github.com/thi-ng/umbrella/compare/@thi.ng/rstream-gestures@0.1.9...@thi.ng/rstream-gestures@0.2.0) (2018-04-24)

### Features

* **rstream-gestures:** allows partial opts, add ID option ([3408c13](https://github.com/thi-ng/umbrella/commit/3408c13))

<a name="0.1.0"></a>
# 0.1.0 (2018-04-14)

### Features

* **rstream-gestures:** initial import [@thi](https://github.com/thi).ng/rstream-gestures ([de1ac7b](https://github.com/thi-ng/umbrella/commit/de1ac7b))
