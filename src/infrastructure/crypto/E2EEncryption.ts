/**
 * End-to-end encryption contract (Signal Protocol–style).
 * Implementation plugs in react-native-libsodium or a native module.
 * The interface is decoupled from any library so it can be swapped.
 */

export interface KeyPair {
  publicKey:  string; // base64-encoded
  privateKey: string; // base64-encoded — never leaves the device
}

export interface EncryptedPayload {
  ciphertext: string; // base64-encoded
  nonce:      string; // base64-encoded
  senderKey:  string; // ephemeral public key
}

export interface IE2EEncryption {
  generateKeyPair(): Promise<KeyPair>;
  encrypt(plaintext: string, recipientPublicKey: string): Promise<EncryptedPayload>;
  decrypt(payload: EncryptedPayload, privateKey: string): Promise<string>;
  deriveSharedSecret(myPrivateKey: string, theirPublicKey: string): Promise<string>;
}

export class E2EEncryption implements IE2EEncryption {
  async generateKeyPair(): Promise<KeyPair> {
    throw new Error('Not implemented — wire in react-native-libsodium');
  }

  async encrypt(_plaintext: string, _recipientPublicKey: string): Promise<EncryptedPayload> {
    throw new Error('Not implemented');
  }

  async decrypt(_payload: EncryptedPayload, _privateKey: string): Promise<string> {
    throw new Error('Not implemented');
  }

  async deriveSharedSecret(_myPrivateKey: string, _theirPublicKey: string): Promise<string> {
    throw new Error('Not implemented');
  }
}

export const e2eEncryption = new E2EEncryption();
