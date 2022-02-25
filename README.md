# ReactDemo
A site demonstrating the ease-of-use of ReactJS and its components (JSX included)

## Creating a ReactApp
1. Open a new terminal
2. Run "npx create-react-app my-app"
3. Let run

## ReactJS Quick-Start
1. This is a library developed by Facebook
2. It allows the user to leverage code components rather than use vanilla JS
3. Easily modularize projects

### Create a Component
1. Check your imports
2. If import does not exist create a new one for the component you are creating
    `Import React from 'React'`
    `Import Component from './component'`
3. Write your function, this will contain your JSX html structure
4. Export your function
    `export default component`

### JSX
1. The easiest way to conceptualize JSX is as html within a JS function
2. Example for creating a paragraph within a div
    ```const Component() => {
            return(
                <>
                <div className={style.Name}>
                    <p>Text</p>
                </div>
                </>
            )
        }
3. Note that if you have more than one element of the same type, it must be wrapped with an empty tag showing JSX that there is a single element

### Running the app
1. Using the provided scripts found in the package.json file, open a new terminal
2. Run `npm run start` or hover over the script and hit `run`
