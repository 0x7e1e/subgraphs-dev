// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Abstained extends ethereum.Event {
  get params(): Abstained__Params {
    return new Abstained__Params(this);
  }
}

export class Abstained__Params {
  _event: Abstained;

  constructor(event: Abstained) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get weight(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Attach extends ethereum.Event {
  get params(): Attach__Params {
    return new Attach__Params(this);
  }
}

export class Attach__Params {
  _event: Attach;

  constructor(event: Attach) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gauge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get lp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gauge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Detach extends ethereum.Event {
  get params(): Detach__Params {
    return new Detach__Params(this);
  }
}

export class Detach__Params {
  _event: Detach;

  constructor(event: Detach) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gauge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class DistributeReward extends ethereum.Event {
  get params(): DistributeReward__Params {
    return new DistributeReward__Params(this);
  }
}

export class DistributeReward__Params {
  _event: DistributeReward;

  constructor(event: DistributeReward) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gauge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GaugeCreated extends ethereum.Event {
  get params(): GaugeCreated__Params {
    return new GaugeCreated__Params(this);
  }
}

export class GaugeCreated__Params {
  _event: GaugeCreated;

  constructor(event: GaugeCreated) {
    this._event = event;
  }

  get gauge(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bribe(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class NotifyReward extends ethereum.Event {
  get params(): NotifyReward__Params {
    return new NotifyReward__Params(this);
  }
}

export class NotifyReward__Params {
  _event: NotifyReward;

  constructor(event: NotifyReward) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get weight(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Whitelisted extends ethereum.Event {
  get params(): Whitelisted__Params {
    return new Whitelisted__Params(this);
  }
}

export class Whitelisted__Params {
  _event: Whitelisted;

  constructor(event: Whitelisted) {
    this._event = event;
  }

  get whitelister(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get lp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gauge(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BaseV1Voter extends ethereum.SmartContract {
  static bind(address: Address): BaseV1Voter {
    return new BaseV1Voter("BaseV1Voter", address);
  }

  _ve(): Address {
    let result = super.call("_ve", "_ve():(address)", []);

    return result[0].toAddress();
  }

  try__ve(): ethereum.CallResult<Address> {
    let result = super.tryCall("_ve", "_ve():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bribefactory(): Address {
    let result = super.call("bribefactory", "bribefactory():(address)", []);

    return result[0].toAddress();
  }

  try_bribefactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("bribefactory", "bribefactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bribes(param0: Address): Address {
    let result = super.call("bribes", "bribes(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_bribes(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("bribes", "bribes(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  claimable(param0: Address): BigInt {
    let result = super.call("claimable", "claimable(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_claimable(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claimable", "claimable(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createGauge(_pool: Address): Address {
    let result = super.call("createGauge", "createGauge(address):(address)", [
      ethereum.Value.fromAddress(_pool)
    ]);

    return result[0].toAddress();
  }

  try_createGauge(_pool: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createGauge",
      "createGauge(address):(address)",
      [ethereum.Value.fromAddress(_pool)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gaugefactory(): Address {
    let result = super.call("gaugefactory", "gaugefactory():(address)", []);

    return result[0].toAddress();
  }

  try_gaugefactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("gaugefactory", "gaugefactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gauges(param0: Address): Address {
    let result = super.call("gauges", "gauges(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_gauges(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("gauges", "gauges(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isGauge(param0: Address): boolean {
    let result = super.call("isGauge", "isGauge(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isGauge(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isGauge", "isGauge(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isWhitelisted(param0: Address): boolean {
    let result = super.call("isWhitelisted", "isWhitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isWhitelisted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelisted",
      "isWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  length(): BigInt {
    let result = super.call("length", "length():(uint256)", []);

    return result[0].toBigInt();
  }

  try_length(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("length", "length():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  listing_fee(): BigInt {
    let result = super.call("listing_fee", "listing_fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_listing_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("listing_fee", "listing_fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minter(): Address {
    let result = super.call("minter", "minter():(address)", []);

    return result[0].toAddress();
  }

  try_minter(): ethereum.CallResult<Address> {
    let result = super.tryCall("minter", "minter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolForGauge(param0: Address): Address {
    let result = super.call("poolForGauge", "poolForGauge(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_poolForGauge(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "poolForGauge",
      "poolForGauge(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolVote(param0: BigInt, param1: BigInt): Address {
    let result = super.call("poolVote", "poolVote(uint256,uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toAddress();
  }

  try_poolVote(param0: BigInt, param1: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "poolVote",
      "poolVote(uint256,uint256):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pools(param0: BigInt): Address {
    let result = super.call("pools", "pools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_pools(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("pools", "pools(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalWeight(): BigInt {
    let result = super.call("totalWeight", "totalWeight():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalWeight(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalWeight", "totalWeight():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  usedWeights(param0: BigInt): BigInt {
    let result = super.call("usedWeights", "usedWeights(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_usedWeights(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "usedWeights",
      "usedWeights(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  votes(param0: BigInt, param1: Address): BigInt {
    let result = super.call("votes", "votes(uint256,address):(int256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBigInt();
  }

  try_votes(param0: BigInt, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("votes", "votes(uint256,address):(int256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromAddress(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  weights(param0: Address): BigInt {
    let result = super.call("weights", "weights(address):(int256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_weights(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("weights", "weights(address):(int256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get __ve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _gauges(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _bribes(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AttachTokenToGaugeCall extends ethereum.Call {
  get inputs(): AttachTokenToGaugeCall__Inputs {
    return new AttachTokenToGaugeCall__Inputs(this);
  }

  get outputs(): AttachTokenToGaugeCall__Outputs {
    return new AttachTokenToGaugeCall__Outputs(this);
  }
}

export class AttachTokenToGaugeCall__Inputs {
  _call: AttachTokenToGaugeCall;

  constructor(call: AttachTokenToGaugeCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AttachTokenToGaugeCall__Outputs {
  _call: AttachTokenToGaugeCall;

  constructor(call: AttachTokenToGaugeCall) {
    this._call = call;
  }
}

export class CreateGaugeCall extends ethereum.Call {
  get inputs(): CreateGaugeCall__Inputs {
    return new CreateGaugeCall__Inputs(this);
  }

  get outputs(): CreateGaugeCall__Outputs {
    return new CreateGaugeCall__Outputs(this);
  }
}

export class CreateGaugeCall__Inputs {
  _call: CreateGaugeCall;

  constructor(call: CreateGaugeCall) {
    this._call = call;
  }

  get _pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateGaugeCall__Outputs {
  _call: CreateGaugeCall;

  constructor(call: CreateGaugeCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DetachTokenFromGaugeCall extends ethereum.Call {
  get inputs(): DetachTokenFromGaugeCall__Inputs {
    return new DetachTokenFromGaugeCall__Inputs(this);
  }

  get outputs(): DetachTokenFromGaugeCall__Outputs {
    return new DetachTokenFromGaugeCall__Outputs(this);
  }
}

export class DetachTokenFromGaugeCall__Inputs {
  _call: DetachTokenFromGaugeCall;

  constructor(call: DetachTokenFromGaugeCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DetachTokenFromGaugeCall__Outputs {
  _call: DetachTokenFromGaugeCall;

  constructor(call: DetachTokenFromGaugeCall) {
    this._call = call;
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get _gauges(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class Distribute1Call extends ethereum.Call {
  get inputs(): Distribute1Call__Inputs {
    return new Distribute1Call__Inputs(this);
  }

  get outputs(): Distribute1Call__Outputs {
    return new Distribute1Call__Outputs(this);
  }
}

export class Distribute1Call__Inputs {
  _call: Distribute1Call;

  constructor(call: Distribute1Call) {
    this._call = call;
  }

  get _gauge(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Distribute1Call__Outputs {
  _call: Distribute1Call;

  constructor(call: Distribute1Call) {
    this._call = call;
  }
}

export class Distribute2Call extends ethereum.Call {
  get inputs(): Distribute2Call__Inputs {
    return new Distribute2Call__Inputs(this);
  }

  get outputs(): Distribute2Call__Outputs {
    return new Distribute2Call__Outputs(this);
  }
}

export class Distribute2Call__Inputs {
  _call: Distribute2Call;

  constructor(call: Distribute2Call) {
    this._call = call;
  }

  get start(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get finish(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Distribute2Call__Outputs {
  _call: Distribute2Call;

  constructor(call: Distribute2Call) {
    this._call = call;
  }
}

export class Distribute3Call extends ethereum.Call {
  get inputs(): Distribute3Call__Inputs {
    return new Distribute3Call__Inputs(this);
  }

  get outputs(): Distribute3Call__Outputs {
    return new Distribute3Call__Outputs(this);
  }
}

export class Distribute3Call__Inputs {
  _call: Distribute3Call;

  constructor(call: Distribute3Call) {
    this._call = call;
  }
}

export class Distribute3Call__Outputs {
  _call: Distribute3Call;

  constructor(call: Distribute3Call) {
    this._call = call;
  }
}

export class DistributeFeesCall extends ethereum.Call {
  get inputs(): DistributeFeesCall__Inputs {
    return new DistributeFeesCall__Inputs(this);
  }

  get outputs(): DistributeFeesCall__Outputs {
    return new DistributeFeesCall__Outputs(this);
  }
}

export class DistributeFeesCall__Inputs {
  _call: DistributeFeesCall;

  constructor(call: DistributeFeesCall) {
    this._call = call;
  }

  get _gauges(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class DistributeFeesCall__Outputs {
  _call: DistributeFeesCall;

  constructor(call: DistributeFeesCall) {
    this._call = call;
  }
}

export class DistroCall extends ethereum.Call {
  get inputs(): DistroCall__Inputs {
    return new DistroCall__Inputs(this);
  }

  get outputs(): DistroCall__Outputs {
    return new DistroCall__Outputs(this);
  }
}

export class DistroCall__Inputs {
  _call: DistroCall;

  constructor(call: DistroCall) {
    this._call = call;
  }
}

export class DistroCall__Outputs {
  _call: DistroCall;

  constructor(call: DistroCall) {
    this._call = call;
  }
}

export class EmitDepositCall extends ethereum.Call {
  get inputs(): EmitDepositCall__Inputs {
    return new EmitDepositCall__Inputs(this);
  }

  get outputs(): EmitDepositCall__Outputs {
    return new EmitDepositCall__Outputs(this);
  }
}

export class EmitDepositCall__Inputs {
  _call: EmitDepositCall;

  constructor(call: EmitDepositCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EmitDepositCall__Outputs {
  _call: EmitDepositCall;

  constructor(call: EmitDepositCall) {
    this._call = call;
  }
}

export class EmitWithdrawCall extends ethereum.Call {
  get inputs(): EmitWithdrawCall__Inputs {
    return new EmitWithdrawCall__Inputs(this);
  }

  get outputs(): EmitWithdrawCall__Outputs {
    return new EmitWithdrawCall__Outputs(this);
  }
}

export class EmitWithdrawCall__Inputs {
  _call: EmitWithdrawCall;

  constructor(call: EmitWithdrawCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EmitWithdrawCall__Outputs {
  _call: EmitWithdrawCall;

  constructor(call: EmitWithdrawCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _minter(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class NotifyRewardAmountCall extends ethereum.Call {
  get inputs(): NotifyRewardAmountCall__Inputs {
    return new NotifyRewardAmountCall__Inputs(this);
  }

  get outputs(): NotifyRewardAmountCall__Outputs {
    return new NotifyRewardAmountCall__Outputs(this);
  }
}

export class NotifyRewardAmountCall__Inputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class NotifyRewardAmountCall__Outputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
    this._call = call;
  }
}

export class PokeCall extends ethereum.Call {
  get inputs(): PokeCall__Inputs {
    return new PokeCall__Inputs(this);
  }

  get outputs(): PokeCall__Outputs {
    return new PokeCall__Outputs(this);
  }
}

export class PokeCall__Inputs {
  _call: PokeCall;

  constructor(call: PokeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PokeCall__Outputs {
  _call: PokeCall;

  constructor(call: PokeCall) {
    this._call = call;
  }
}

export class ResetCall extends ethereum.Call {
  get inputs(): ResetCall__Inputs {
    return new ResetCall__Inputs(this);
  }

  get outputs(): ResetCall__Outputs {
    return new ResetCall__Outputs(this);
  }
}

export class ResetCall__Inputs {
  _call: ResetCall;

  constructor(call: ResetCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ResetCall__Outputs {
  _call: ResetCall;

  constructor(call: ResetCall) {
    this._call = call;
  }
}

export class UpdateAllCall extends ethereum.Call {
  get inputs(): UpdateAllCall__Inputs {
    return new UpdateAllCall__Inputs(this);
  }

  get outputs(): UpdateAllCall__Outputs {
    return new UpdateAllCall__Outputs(this);
  }
}

export class UpdateAllCall__Inputs {
  _call: UpdateAllCall;

  constructor(call: UpdateAllCall) {
    this._call = call;
  }
}

export class UpdateAllCall__Outputs {
  _call: UpdateAllCall;

  constructor(call: UpdateAllCall) {
    this._call = call;
  }
}

export class UpdateForCall extends ethereum.Call {
  get inputs(): UpdateForCall__Inputs {
    return new UpdateForCall__Inputs(this);
  }

  get outputs(): UpdateForCall__Outputs {
    return new UpdateForCall__Outputs(this);
  }
}

export class UpdateForCall__Inputs {
  _call: UpdateForCall;

  constructor(call: UpdateForCall) {
    this._call = call;
  }

  get _gauges(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class UpdateForCall__Outputs {
  _call: UpdateForCall;

  constructor(call: UpdateForCall) {
    this._call = call;
  }
}

export class UpdateForRangeCall extends ethereum.Call {
  get inputs(): UpdateForRangeCall__Inputs {
    return new UpdateForRangeCall__Inputs(this);
  }

  get outputs(): UpdateForRangeCall__Outputs {
    return new UpdateForRangeCall__Outputs(this);
  }
}

export class UpdateForRangeCall__Inputs {
  _call: UpdateForRangeCall;

  constructor(call: UpdateForRangeCall) {
    this._call = call;
  }

  get start(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get end(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateForRangeCall__Outputs {
  _call: UpdateForRangeCall;

  constructor(call: UpdateForRangeCall) {
    this._call = call;
  }
}

export class UpdateGaugeCall extends ethereum.Call {
  get inputs(): UpdateGaugeCall__Inputs {
    return new UpdateGaugeCall__Inputs(this);
  }

  get outputs(): UpdateGaugeCall__Outputs {
    return new UpdateGaugeCall__Outputs(this);
  }
}

export class UpdateGaugeCall__Inputs {
  _call: UpdateGaugeCall;

  constructor(call: UpdateGaugeCall) {
    this._call = call;
  }

  get _gauge(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateGaugeCall__Outputs {
  _call: UpdateGaugeCall;

  constructor(call: UpdateGaugeCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _poolVote(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _weights(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}

export class WhitelistCall extends ethereum.Call {
  get inputs(): WhitelistCall__Inputs {
    return new WhitelistCall__Inputs(this);
  }

  get outputs(): WhitelistCall__Outputs {
    return new WhitelistCall__Outputs(this);
  }
}

export class WhitelistCall__Inputs {
  _call: WhitelistCall;

  constructor(call: WhitelistCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WhitelistCall__Outputs {
  _call: WhitelistCall;

  constructor(call: WhitelistCall) {
    this._call = call;
  }
}