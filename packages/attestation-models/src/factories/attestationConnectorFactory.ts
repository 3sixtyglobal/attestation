// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Factory } from "@3sixty/core";
import type { IAttestationConnector } from "../models/IAttestationConnector.js";

/**
 * Factory for creating attestation connectors.
 */
export const AttestationConnectorFactory =
	Factory.createFactory<IAttestationConnector>("attestation");
