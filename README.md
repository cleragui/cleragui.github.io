# **DEDICATION**

_"This project is dedicated to my sister who I wanted to someday thank for taking care of me when I was kid. Though you are no longer with us, you will never be forgotten. May your memory be forever held in this project."_  
-- **Bridget Trinity Vedjesu** --

<br>

# **Clera User's Manual**

Clera provides platform for developing python GUI quickly and simply with low learning curve

## THE BASICS

### **Installation**

> pip install clera

Your first application and Skeleton of every GUI developed using clera.

<font>**Code:** </font>

```python
from clera import *
window = Window()
# window widgets and layouts goes here!
window.run()
```

<font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png)

> <font > **" Why Complicate Simplicity? "**</font>

## PLATFORMS

### Hardware and OS Support

> Clera runs on multiple platforms and have a native interface on each.

### Hardware Support

- Runs on Desktop and Laptops

### OS Support

- Windows
- Mac
- Linux

<br>
<br>

# **Widgets and Elements Reference**

### <font color='yellow'>**Button Widget**</font>

<br>

> value = **''**,  
> func = **None**,  
> icon = **None**,  
> id = **None**,  
> disabled = **False**,  
> default = **False**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> checkable = **False**,  
> checked = **False**,  
> hidden = **False**,  
> focus = **True**,
> icon_size = **None**
> statustip = **None**
> tooltip = **None**
> shortcut = **None**

<br>

<!-- <font>**Code:** </font> -->

```python
# Button(value, func, id)
def say_hi():
    print('Hi')

Button(value='Text', func=say_hi, id='btn')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name       | Meaning                                                                                                                                                                                 |
| -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | value      | define text displayed on button                                                                                                                                                         |
| function | func       | function to be executed when button is clicked                                                                                                                                          |
| str      | icon       | path to icon to be displayed on button                                                                                                                                                  |
| any      | id         | Widget id for representing and calling widget in other code parts and styling                                                                                                           |
| bool     | disabled   | set button disabled or unfunctional. Lacks interaction. default False                                                                                                                   |
| bool     | default    | make button the default selected button                                                                                                                                                 |
| tuple    | grid       | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element                                                                                                   |
| tuple    | sizepolicy | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change |
| bool     | checkable  | set button checkeable, a state of selected and unselected with each button interaction. default False                                                                                   |
| bool     | checked    | set button slected default on application launch. default False                                                                                                                         |
| bool     | hidden     | hide Widget                                                                                                                                                                             |
| bool     | focus      | set widget focused                                                                                                                                                                      |
| int      | icon_size  | set button icon size                                                                                                                                                                    |
| any      | statustip  | set statusbar message for the widget                                                                                                                                                    |
| any      | tooltip    | set tooltip value for button                                                                                                                                                            |
| str      | shortcut   | set hotkey fot the button                                                                                                                                                               |

<br>
<br>

### <font color='yellow'>**Input Widget**</font>

<br>

> placeholder = **None**,  
> id = **None**,  
> value = **None**,  
> type = **STANDARD**,  
> diabled = **False**,  
> readonly = **False**,  
> maxlength = **None**,  
> hidden = **False**,  
> font = **None**,  
> fontsize = **None**,  
> text_changed = **None**,  
> return_pressed = **None**,  
> editing_finished = **None**,  
> text_edited = **None**,  
> selection_changed = **None**,  
> sizepolicy = **(None, None)**,  
> grid = **(None, None)**,

<br>

<!-- <font>**Code:** </font> -->

```python
# Input(placeholder, id)
Input(placeholder='Enter Username', id='username')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name              | Meaning                                                                                                                                                                                  |
| -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | placeholder       | set placeholder text for the widget                                                                                                                                                      |
| any      | id                | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| any      | value             | sets default value of the input widget                                                                                                                                                   |
| str      | type              | set the input widget type. default STANDARD. TYPES : password, standard and noecho                                                                                                       |
| bool     | disabled          | set input box disabled or uneditable. Lacks interaction, usually inactive. default False                                                                                                 |
| bool     | readonly          | set input box to read only. visually active but value unchangeable. default False                                                                                                        |
| int      | maxlength         | set maximm input value capacity                                                                                                                                                          |
| bool     | hidden            | hides input widget. default False                                                                                                                                                        |
| str      | font              | set font family of the input widget                                                                                                                                                      |
| int      | fontsize          | set the font size of the input widget                                                                                                                                                    |
| function | text_changed      | fucntion to execute if input value is changed                                                                                                                                            |
| function | return_pressed    | fucntion to execute if "enter" key is pressed                                                                                                                                            |
| function | editing_finished  | fucntion to execute when input value change is complete                                                                                                                                  |
| function | text_edited       | function to execute in a value is added or removed.                                                                                                                                      |
| function | selection_changed | function to execute if a selected value is changed.                                                                                                                                      |
| tuple    | sizepolicy        | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| tuple    | grid              | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |

<br>
<br>

### <font color='yellow'>**Text Widget**</font>

<br>

> value = **''**,  
> id = **None**,  
> link = **None**,  
> hovered = **None**,  
> clicked = **None**,  
> buddy = **None**,  
> alignment = **None**,  
> wordwrap = **False**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> hidden = **False**

<br>

<!-- <font>**Code:** </font> -->

```python
# Text(value, id)
Text(value='This is a text', id='first_line')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name       | Meaning                                                                                                                                                                                  |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | value      | set text value                                                                                                                                                                           |
| any      | id         | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| str      | link       | set hyperlink for widget.                                                                                                                                                                |
| function | hovered    | fucntion to execute if widget is hovered or mouse pointer is moved over he widget                                                                                                        |
| function | clicked    | function to execute if widget is clicked                                                                                                                                                 |
| str      | buddy      | ...                                                                                                                                                                                      |
| str      | alignment  | sets alignment for text widget. ALIGNMENTS: Center, Justify, Right, Left, Top, Bottom, Hcenter, Vcenter                                                                                  |
| bool     | wordwrap   | contain word overflow in application window. default False.                                                                                                                              |
| tuple    | grid       | uple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                    |
| tuple    | sizepolicy | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| bool     | hidden     | hide widget                                                                                                                                                                              |

<br>

> 📝 **Note:** <font color='red'>hovered</font> and <font color='red'>clicked</font> only works if link is set.

<br>
<br>

### <font color='yellow'>**Image Widget**</font>

<br>

> source = **None**,  
> id = **None**,  
> size = **None**,  
> alignment = **None**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> hidden = **False**,

<br>

<!-- <font>**Code:** </font> -->

```python
# Image(source, id)
Image(source='/image/new.png', id='logo')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type  | Name       | Meaning                                                                                                                                                                                  |
| ----- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| str   | source     | path to image file.                                                                                                                                                                      |
| any   | id         | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| int   | size       | set the size of the widget.                                                                                                                                                              |
| str   | alignment  | set alignment of image                                                                                                                                                                   |
| tuple | grid       | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple | sizepolicy | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| bool  | hidden     | hide widget                                                                                                                                                                              |

<br>
<br>

### <font color='yellow'>**CheckBox Widget**</font>

<br>

> label = **''**,  
> checked = **False**,  
> id = **None**,  
> state_changed = **None**,  
> toggled = **None**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,

<br>

<!-- <font>**Code:** </font> -->

```python
# CheckBox(label, checked, id)
CheckBox(label='Windows', checked=True, id='win')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name          | Meaning                                                                                                                                                                                  |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | label         | set checkbox label or text                                                                                                                                                               |
| bool     | checked       | set checkbox selected on first runs. default False                                                                                                                                       |
| any      | id            | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| function | state_changed | fucntion to execute if checkbox state is changed.                                                                                                                                        |
| function | toggled       | function to execute when checkbox is toggled. checked / unchecked                                                                                                                        |
| tuple    | grid          | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy    | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |

<br>
<br>

### <font color='yellow'>**RadioButton Widget**</font>

<br>

> label = **''**,  
> checked = **False**,  
> id = **None**,  
> state_changed = **None**,  
> toggled = **None**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,

<br>

<!-- <font>**Code:** </font> -->

```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
```

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name          | Meaning                                                                                                                                                                                  |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | label         | set radiobutton label or text                                                                                                                                                            |
| bool     | checked       | set radiobutton selected on first runs. default False                                                                                                                                    |
| any      | id            | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| function | state_changed | fucntion to execute if radiobutton state is changed.                                                                                                                                     |
| function | toggled       | fucntion to execute if widget is toggled                                                                                                                                                 |
| tuple    | grid          | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy    | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |

<br>
<br>

### <font color='yellow'>**Textarea Widget**</font>

<br>

> id = **None**,  
> placeholder = **None**,  
> hidden = **None**,  
> alignment = **None**,  
> value = **None**,  
> disabled = **False**,  
> readonly = **False**,  
> text_changed = **None**,  
> selection_changed = **None**,  
> undo_available = **None**,  
> redo_available = **None**,  
> maxlength = **None**,  
> font = **None**,  
> fontsize = **None**,  
> sizepolicy = **(None, None)**,  
> grid = **No(None, None)e**,  
> tabwidth = **None**,
> wordwrap = **False**

<br>

<!-- <font>**Code:** </font> -->

<!-- ```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name              | Meaning                                                                                                                                                                                  |
| -------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | id                | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| any      | placeholder       | set placeholder text for the widget                                                                                                                                                      |
| bool     | hidden            | hide widget                                                                                                                                                                              |
| str      | alignment         | set text alignment in the widget                                                                                                                                                         |
| any      | value             | sets default value of the textarea widget                                                                                                                                                |
| bool     | disabled          | set textarea disabled or uneditable. Lacks interaction, usually inactive. default False                                                                                                  |
| bool     | readonly          | set textarea to read only. visually active but value unchangeable. default False                                                                                                         |
| function | text_changed      | ucntion to execute if textarea value is changed                                                                                                                                          |
| function | selection_changed | function to execute if a selected value is changed.                                                                                                                                      |
| function | undo_available    | function to execute of undo is available for the textarea widget                                                                                                                         |
| function | redo_available    | function to execute of redo is available for the textarea widget                                                                                                                         |
| int      | maxlength         | set maximum value length of a textarea                                                                                                                                                   |
| str      | font              | set textarea value font family. example Arial                                                                                                                                            |
| int      | fontsize          | set textarea value size                                                                                                                                                                  |
| tuple    | sizepolicy        | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| tuple    | grid              | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| int      | tabwidth          | set the tab width of textarea values.                                                                                                                                                    |
| bool     | wordwrap          | contain word overflow in application window. default False.                                                                                                                              |

<br>
<br>

### <font color='yellow'>**ListWidget Widget**</font>

<br>

> list_items = **None**,  
> id = **None**,  
> mode = **None**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> func = **None**,

<br>

<!-- <font>**Code:** </font> -->
<!--
```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name       | Meaning                                                                                                                                                                                  |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | list_items | items for the list widget                                                                                                                                                                |
| any      | id         | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| str      | mode       | ...                                                                                                                                                                                      |
| tuple    | grid       | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| function | func       | function to execute if listwidget is interacted with                                                                                                                                     |

<br>
<br>

### <font color='yellow'>**Select Widget**</font>

<br>

> option = **None**,  
> id = **None**,  
> placeholder = **None**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> current_text_changed = **None**,  
> activated = **None**,

<br>

<!-- <font>**Code:** </font> -->
<!--
```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name                 | Meaning                                                                                                                                                                                  |
| -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | option               | options for select widget                                                                                                                                                                |
| any      | id                   | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| any      | placeholder          | set default option for select widget                                                                                                                                                     |
| tuple    | grid                 | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy           | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| function | current_text_changed | function of execute if option is changed                                                                                                                                                 |
| function | activated            | ...                                                                                                                                                                                      |

<br>
<br>

### <font color='yellow'>**ProgressBar Widget**</font>

<br>

> id = **None**,  
> min = **0**,  
> max = **0**,  
> value = **None**,  
> orientation = **horizontal**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> text_visible = **True**,  
> inverted = **False**,  
> value_changed = **None**,

<br>

<!-- <font>**Code:** </font> -->

<!-- ```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name          | Meaning                                                                                                                                                                                  |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | id            | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| int      | min           | set minimum value                                                                                                                                                                        |
| int      | max           | set maximum value                                                                                                                                                                        |
| int      | value         | set progressbar value                                                                                                                                                                    |
| str      | orientation   | set progressbar orientation                                                                                                                                                              |
| tuple    | grid          | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy    | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| bool     | text_visible  | set progress bar text visible                                                                                                                                                            |
| bool     | inverted      | run progress backwards                                                                                                                                                                   |
| function | value_changed | function to execute when progressbar value changes                                                                                                                                       |

<br>
<br>

### <font color='yellow'>**Slider Widget**</font>

<br>

> id = **None**,  
> min = **0**,  
> max = **0**,  
> value = **None**,  
> step = **None**,  
> orientation = **horizontal**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> value_changed = **None**,

<br>

<!-- <font>**Code:** </font> -->

<!-- ```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name          | Meaning                                                                                                                                                                                  |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | id            | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| int      | min           | set minimum value                                                                                                                                                                        |
| int      | max           | set maximum value                                                                                                                                                                        |
| int      | value         | set slider value                                                                                                                                                                         |
| int      | step          | set increase value steps for slider                                                                                                                                                      |
| str      | orientation   | set slidebar orientation                                                                                                                                                                 |
| tuple    | grid          | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy    | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| function | value_changed | function to execute when slider value changes                                                                                                                                            |

<br>
<br>

### <font color='yellow'>**Dial Widget**</font>

<br>

> id = **None**,  
> min = **0**,  
> max = **0**,  
> value = **None**,  
> tick_target = **None**,  
> tick = **False**,  
> wrapping = **False**,  
> grid = **(None, None)**,  
> sizepolicy = **(None, None)**,  
> value_changed = **None**,

<br>

<!-- <font>**Code:** </font> -->

<!-- ```python
# RadioButton(label, checked, id)
RadioButton(label='Windows', checked=True, id='win')
``` -->

<!-- <font>**Output:** </font>

![Empty Window](clera/docs/images/empty_window.png) -->

<br>

| Type     | Name          | Meaning                                                                                                                                                                                  |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any      | id            | Widget id for representing and calling widget in other code parts and styling                                                                                                            |
| int      | min           | set minimum value                                                                                                                                                                        |
| int      | max           | set maximum value                                                                                                                                                                        |
| int      | value         | set dial value                                                                                                                                                                           |
| any      | tick_target   | ...                                                                                                                                                                                      |
| bool     | tick          | show dial ticks or markers                                                                                                                                                               |
| bool     | wrapping      | ...                                                                                                                                                                                      |
| tuple    | grid          | Tuple (Horizontal, Vertical). set grid occupy position. works with the Grid() Element.                                                                                                   |
| tuple    | sizepolicy    | Tuple (Horizontal, Vertical). set widget stretch rule. Takes "fixed" for widget stay fixed on window size change. "expand" for widget to stretch in the direction of window size change. |
| function | value_changed | function to execute when slider value changes                                                                                                                                            |
