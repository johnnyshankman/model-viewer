/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {css, CSSResult} from 'lit-element';
export const styles: CSSResult = css`
.app {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.mvContainer {
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}

model-viewer {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
  background-color: #eee;
}

.ios-message {
  padding: 5px 16px;
  margin: 10px;
  position: absolute;
  bottom: 0;
  font-size: small;
  color: black;
  background-color: rgb(255, 204, 203);
  word-wrap: break-word;
  width: 100%;
}
`;