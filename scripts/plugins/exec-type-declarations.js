import { exec } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';

const spinner = ora();

const execTypeDeclarations = {
    name: 'exec-type-declarations',
    setup(build) {
        build.onStart(() => {
            spinner.text = 'Building';
            spinner.start();
        });
        build.onEnd((result) => {
            if (result.errors.length > 0) {
                return;
            }

            spinner.succeed();
            spinner.text = 'Generating types';
            spinner.start();

            exec('tsc --emitDeclarationOnly --project tsconfig.prod.json', (error) => {
                if (error) {
                    console.error(`Generating error: ${error}`);
                    return;
                }
                spinner.succeed();
                console.log(chalk.green('Successfully build'));
            });
        });
    },
};

export default execTypeDeclarations;
