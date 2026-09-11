# QuickTools

一组**自包含单文件 HTML** 小工具，适合保存在手机、平板或任意终端上随时使用。

## 特性


## 工具列表

| 工具 | 说明 | 文件 |
| --- | --- | --- |
| Energy shift calculation（A − B） | 光子能量 E / 波长 λ / 频率 ν / 波数 ν̃ 互算；由基准点 A，给定谱线 B 或差值 Δ 之一即得另一个 | [`Shift_calculation.html`](tools/Shift_calculation.html) |
| Energy scale in GaAs（l_B / ħω_c / E_C / E_Z） | 磁场中 GaAs 特征能量：磁长度、回旋能、库伦能（宽度修正）、塞曼能；样品参数 g、k、m*/m₀、ε_r 可调（默认 GaAs） | [`Energy_calculation.html`](tools/Energy_calculation.html) |
| Time conversion（ISO / Unix / MATLAB） | ISO 时间、Unix 秒/毫秒与 MATLAB datenum 互转 | [`Time_conversion.html`](tools/Time_conversion.html) |
| Ramping field（分段磁场爬升） | 按分段结束磁场与速度计算每段到达时间；以磁场为 X 轴，同时绘制速度和从 0 T 起的累计时间 | [`ramping-field.html`](tools/ramping-field.html) |

## 快速开始

### 本地打开

直接双击任一 `.html` 文件，在浏览器中离线使用；或将整个目录拷贝到手机 / 平板，用浏览器打开。

### 远程打开（GitHub Pages）

入口页：<https://miceKu-phys.github.io/QuickTools/>

- [Energy shift calculation（A − B）](https://miceKu-phys.github.io/QuickTools/tools/Shift_calculation.html)
- [Energy scale in GaAs（l_B / ħω_c / E_C / E_Z）](https://miceKu-phys.github.io/QuickTools/tools/Energy_calculation.html)
- [Time conversion（ISO / Unix / MATLAB）](https://miceKu-phys.github.io/QuickTools/tools/Time_conversion.html)
- [Ramping field](https://miceKu-phys.github.io/QuickTools/tools/ramping-field.html)


入口页 `index.html` 提供工具目录，并通过按钮跳转到各工具的 GitHub Pages 页面。

## 项目结构

```
QuickTools/
├── tools/
│   ├── Shift_calculation.html     # 能量/波数换算与作差
│   ├── Energy_calculation.html    # 磁场中 GaAs 能量标度（l_B / E_C / E_Z）
│   ├── Time_conversion.html       # ISO / Unix / MATLAB 时间转换
│   └── ramping-field.html         # 分段磁场爬升计划与速度图
├── README.md
└── index.html                         # 在线入口：工具目录与 GitHub Pages 链接
```

## 状态

当前包含四个可独立使用的 HTML 工具，入口页可直接访问各工具的 GitHub Pages 页面。

## License

待定。
