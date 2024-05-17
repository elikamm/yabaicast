const FS = require('fs');

function generateFile(msgVerb, msgNoun, cmd)
{
    let lowVerb = msgVerb.toLowerCase(),
        lowNoun = msgNoun.toLowerCase(),
        pastVerb = lowVerb.endsWith('e') ? lowVerb + 'd' : lowVerb + 'ed',
        fileName = `yabai-${lowVerb}-${lowNoun.replaceAll(' ', '-')}.sh`;

    if (pastVerb == 'stoped') pastVerb = 'stopped';

    let content =
        `#!/bin/bash\n\n` +
        `# @raycast.schemaVersion 1\n` +
        `# @raycast.title ${msgVerb} ${msgNoun}\n` +
        `# @raycast.mode silent\n\n` +
        `# @raycast.icon yabai-icon.svg\n` +
        `# @raycast.packageName Yabai\n\n` +
        `# @raycast.author Elias Kamm\n` +
        `# @raycast.authorURL https://eliaskamm.com/\n\n` +
        `if yabai ${cmd}\n` +
        `then\n` +
        `   echo "${pastVerb} ${lowNoun}"\n` +
        `else\n` +
        `   echo "error: could not ${lowVerb} ${lowNoun}"\n` +
        `fi`;

    FS.writeFileSync(fileName, content);
}

///////////// FILES /////////////

generateFile('Restart', 'Yabai', '--restart-service');
generateFile('Start', 'Yabai', '--start-service');
generateFile('Stop', 'Yabai', '--stop-service');

generateFile('Equalize', 'Space', '-m space --equalize');
generateFile('Balance', 'Space', '-m space --balance');
generateFile('Mirror', 'Space Vertically', '-m space --mirror x-axis');
generateFile('Mirror', 'Space Horizontally', '-m space --mirror y-axis');
generateFile('Rotate', 'Space Clockwise', '-m space --rotate 270');
generateFile('Rotate', 'Space Counterclockwise', '-m space --rotate 90');

generateFile('Close', 'Window', '-m window --close');
generateFile('Minimize', 'Window', '-m window --minimize');

//generateFile('Toggle', 'Floating Window', '-m window --toggle float');
