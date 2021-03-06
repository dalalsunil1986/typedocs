# exported-functions
- [Constants](#constants)
    + [CONST](#const)
    + [VAR](#var)
- [Enumerations](#enumerations)
    + [ENUM](#enum)
- [Functions](#functions)
    + [add](#add)
- [Classes](#classes)
    + [A](#a)
    + [dummyClass](#dummyclass)
- [Interfaces](#interfaces)
    + [B](#b)
    + [C](#c)


## Constants

#### CONST

```typescript
string CONST = "FOO"
```

A constant.

---
#### VAR

```typescript
string VAR = "BAR"
```

A variable.

---


## Enumerations

#### ENUM
```typescript
enum ENUM {
    a = 1,
    b = 2
}
```

An enum.

Type | Name | Description
:--- | :--- | :----------
[Enumeration member] | a | This one is called a, the other has no doc.
[Enumeration member] | b | -

---


## Functions

#### add
```typescript
function add(a: number, b: number): number
```



Type | Name | Description
:--- | :--- | :----------
number | a | The first summand.
number | b | The second summand.

---


## Classes

#### A

```typescript
class A  {
    protected method(): void;
}
```

An exported superclass.

**Known subclasses:** [dummyClass](#dummyclass)


Type | Name | Description
:--- | :--- | :----------
[Method] | method | -

---
#### dummyClass

```typescript
class dummyClass extends A implements B, C {
    public constructor();
    public constructor(foo: number);
    

    public bar: number = 2;
    protected foo: any;

    public dummyFctExp(): void; // { implements function of C }
    protected method(): void; // { inherited from A }
}
```

This is a dummy class with no real doc.

**Inheritance:** [A](#a)
**Implemented interfaces:** [B](#b), [C](#c)


Type | Name | Description
:--- | :--- | :----------
[Constructor] | constructor | Default Constructor. Constructor with foo. Constructor implementation. Constructor implementation.
number | bar | The 'bar' variable.
any | foo | -
[Method] | dummyFctExp | { implements function of [C](#c) }
[Method] | method | { inherited from [A](#a) }

---


## Interfaces

#### B

```typescript
interface B  {
    dummyFctExp: <T>(a: T) => void
}
```

An exported interface.

**Known subclasses:** [C](#c)


Type | Name | Description
:--- | :--- | :----------
function | dummyFctExp | Generic interface function.

---
#### C

```typescript
interface C extends B  {
    dummyFctExp: <T>(a: T) => void // { inherited from B }
}
```



**Inheritance:** [B](#b)


Type | Name | Description
:--- | :--- | :----------
function | dummyFctExp | { inherited from [B](#b) }

---
