// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

interface logError {
  message: string;
  source: string[];
}

interface logErrorApiArgs {
  bucket: string;
  object: string;
}

interface logErrorApi {
  name: string;
  args: logErrorApiArgs;
}

export interface LogMessage {
  remotehost: string;
  host: string;
  requestID: string;
  userAgent: string;
  message: string;
  api: logErrorApi;
  deploymentid: string;
  time: Date;
  error: logError;
  ConsoleMsg: string;
  key: number;
  errKind: string;
  level?: string | number;
  node?: string | number;
}
