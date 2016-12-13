# TOC
   - [add test](#add-test)
   - [异步 beforeEach 示例](#-beforeeach-)
   - [test multi *](#test-multi-)
   - [timeout.test.js - 超时测试](#timeouttestjs---)
<a name=""></a>
 
<a name="add-test"></a>
# add test
x+y return true.

```js
expect(add(1,3)).to.be.equal(4);
```

<a name="-beforeeach-"></a>
# 异步 beforeEach 示例
全局变量异步修改应该成功.

```js
expect(foo).to.be.equal(true);
```

<a name="test-multi-"></a>
# test multi *
a*b return true.

```js
expect(multi(3,4)).to.be.equal(12);
```

<a name="timeouttestjs---"></a>
# timeout.test.js - 超时测试
