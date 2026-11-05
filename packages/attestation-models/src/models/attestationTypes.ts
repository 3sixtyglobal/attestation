// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types of attestation data.
 */
export const AttestationTypes = {
	/**
	 * Represents attestation information.
	 */
	Information: "Information",

	/**
	 * Represents attestation JWT proof.
	 */
	JwtProof: "JwtProof"
} as const;

/**
 * The types of attestation data.
 */
export type AttestationTypes = (typeof AttestationTypes)[keyof typeof AttestationTypes];
