# QuickTools

一组**自包含单文件 HTML** 小工具, 适合保存在手机 / 平板 / 任意终端上随时使用。

## 特性


## 工具列表

| 工具 | 说明 | 文件 |
| --- | --- | --- |
| Energy shift calculation（A − B） | 光子能量 E / 波长 λ / 频率 ν / 波数 ν̃ 互算；由基准点 A，给定谱线 B 或差值 Δ 之一即得另一个 | [`Shift_calculation.html`](tools/Shift_calculation.html) |
| Energy scale in GaAs（l_B / ħω_c / E_C / E_Z） | 磁场中 GaAs 特征能量：磁长度、回旋能、库伦能（宽度修正）、塞曼能；样品参数 g、k、m*/m₀、ε_r 可调（默认 GaAs） | [`Energy_calculation.html`](tools/Energy_calculation.html) |
| Time conversion（ISO / Unix / MATLAB） | ISO 时间、Unix 秒/毫秒与 MATLAB datenum 互转 | [`Time_conversion.html`](tools/Time_conversion.html) |

## 快速开始

### 本地打开

直接双击任一 `.html` 文件，在浏览器中离线使用；或将整个目录拷贝到手机 / 平板，用浏览器打开。

### 远程打开（GitHub Pages）



- [Energy shift calculation（A − B）](https://MiceKu-phys.github.io/quicktools/tools/Shift_calculation.html)
- [Energy scale in GaAs（l_B / ħω_c / E_C / E_Z）](https://MiceKu-phys.github.io/quicktools/tools/Energy_calculation.html)
- [Time conversion（ISO / Unix / MATLAB）](https://MiceKu-phys.github.io/quicktools/tools/Time_conversion.html)



入口页 `index.html` 提供封面与目录（SPA 原地切换，规划中）。

## 项目结构

```
QuickTools/
├── tools/
│   ├── Shift_calculation.html     # 能量/波数换算与作差
│   ├── Energy_calculation.html    # 磁场中 GaAs 能量标度（l_B / E_C / E_Z）
│   └── Time_conversion.html       # ISO / Unix / MATLAB 时间转换
├── README.md
├── index.html (unfinished)           # 单文件在线入口：目录 + 全部工具原地切换（由构建脚本生成）
└── total.html (unfinished)           # 全工具内联合并产物（构建脚本生成）
```

## 状态

早期开发阶段。当前已有三个功能工具（存于 `tools/`）；入口 `index.html` 与合并产物构建脚本待实现。

## License

待定。
