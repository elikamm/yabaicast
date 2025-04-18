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
        `if ${cmd}\n` +
        `then\n` +
        `   echo "${pastVerb} ${lowNoun}"\n` +
        `else\n` +
        `   echo "error: could not ${lowVerb} ${lowNoun}"\n` +
        `fi`;

    FS.writeFileSync(fileName, content);
}

///////////// FILES /////////////

generateFile('Restart', 'Yabai', 'yabai --restart-service');
generateFile('Start', 'Yabai', 'yabai --start-service');
generateFile('Stop', 'Yabai', 'yabai --stop-service');

generateFile('Equalize', 'Space', 'yabai -m space --equalize');
generateFile('Balance', 'Space', 'yabai -m space --balance');
generateFile('Mirror', 'Space Vertically', 'yabai -m space --mirror x-axis');
generateFile('Mirror', 'Space Horizontally', 'yabai -m space --mirror y-axis');
generateFile('Rotate', 'Space Clockwise', 'yabai -m space --rotate 270');
generateFile('Rotate', 'Space Counterclockwise', 'yabai -m space --rotate 90');

generateFile('Close', 'Window', 'yabai -m window --close');
generateFile('Minimize', 'Window', 'yabai -m window --minimize');
generateFile('Toggle', 'Floating Window', 'yabai -m window --toggle float');

generateFile('Move', 'Window To Next Space', 'yabai -m window --space next && yabai -m space --focus next');
generateFile('Move', 'Window To Previous Space', 'yabai -m window --space prev && yabai -m space --focus prev');
generateFile('Move', 'Window To New Space', 'yabai -m space --create && yabai -m window --space last && yabai -m space --focus last');

generateFile('Destroy', 'Space', 'yabai -m space --destroy');
generateFile('Focus', 'Next Space', 'yabai -m space --focus next');
generateFile('Focus', 'Previous Space', 'yabai -m space --focus prev');

//generateFile('Toggle', 'Floating Window', '-m window --toggle float');
