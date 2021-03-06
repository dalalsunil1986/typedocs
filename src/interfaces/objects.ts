import {
  ReflectionKind
} from './ReflectionKind';

export type ID = number;

export enum Title {
  Constants, Enumerations, Functions, Classes, Interfaces
}

export interface BaseObject {
  id: ID,
  name: string,
  kind: ReflectionKind,
  kindString?: string,
  flags: any,
  originalName?: string,
  comment?: CommentObject,
  children?: BaseObject[]
  groups?: GroupObject[]
}

/*
  ---------- TYPE OBJECTS ----------
 */

export interface EnumObject extends BaseObject {
  children: EnumMemberObject[]
}

export interface EnumMemberObject extends BaseObject {
  defaultValue: any
}

export interface ClassObject extends BaseObject {
  extendedBy?: RelationObject[],
  extendedTypes?:  RelationObject[],
  implementedTypes?: RelationObject[],
  constructors?: ConstructorObject,
  properties?: BaseObject[],
  methods?: MethodObject[]
}

export interface ConstructorObject extends BaseObject {
  signatures?: SignatureObject[]
}

export interface MethodObject extends FunctionObject {
  implementationOf?: RelationObject,
  inheritedFrom?: RelationObject
}

export interface InterfaceObject extends BaseObject {
  children: ParameterObject[],
  signatures?: SignatureObject[],
  extendedBy?: RelationObject[],
  implementedBy?: RelationObject[],
  extendedTypes?:  RelationObject[]
}

export interface ConstantObject extends BaseObject {
  type: TypeObject,
  defaultValue: string
}

export interface FunctionObject extends BaseObject {
  signatures: SignatureObject[]
}

export interface SignatureObject extends BaseObject {
  typeParameter?: ParameterObject[],
  parameters?: ParameterObject[],
  type: TypeObject
}

export interface ParameterObject extends BaseObject {
  type: TypeObject
  inheritedFrom?: RelationObject
}

export interface TypeLiteralObject extends BaseObject {
  signatures?: SignatureObject[],
  indexSignature?: SignatureObject[],
  children?: ParameterObject[]
}

/*
  ---------- TYPEDOC-JSON OBJECTS ----------
 */

export const TEMPLATE: GroupObject[] = [
  // Title[Title.*] for string conversion
  { title: Title[Title.Constants], kind: 32, children: [] },
  { title: Title[Title.Enumerations], kind: 4, children: [] },
  { title: Title[Title.Functions], kind: 64, children: [] },
  { title: Title[Title.Classes], kind: 128, children: [] },
  { title: Title[Title.Interfaces], kind: 256, children: [] }
];

export interface GroupObject {
  title: string,
  kind: ReflectionKind,
  children: number[]
}

export interface Result {
  title: Title,
  children: BaseObject[]
}

export interface RelationObject {
  type: string,
  name: string,
  id: ID
}

export interface TypeObject {
  type: string,
  name?: string,
  value?: string,
  declaration?: TypeLiteralObject,
  typeArguments?: RelationObject[],
  types?: UnionObject[]
}

export interface UnionObject {
  type: string,
  value: string
}

// BADLY designed by typedoc, no field to focus on -.-
export interface CommentObject {
  shortText?: string,
  text?: string,
  returns?: string,
  tags?: { tag: string, text: string }[]
}
