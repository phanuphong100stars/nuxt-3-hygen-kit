module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      // {
      //   type: 'select',
      //   name: 'category',
      //   message: 'Which Atomic design level?',
      //   choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
      // },
      {
        type: "input",
        name: "name",
        message: "What is the module name?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      return answers;
    });
  },
};
