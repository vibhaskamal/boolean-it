from git import Repo
from git.diff import NULL_TREE
from pynput import keyboard
from pynput.keyboard import Key, Listener

# Sample data in data.text: C:\Users\aaron\Desktop\work\folder\git-repository-folder\.git
filename = 'data.txt'

def read_from_data(file):
    with open(file) as f:
        data = []
        for line in f:
            data.append(line.strip())
        
    return data

def git_push(path_of_git_repo, commit_message):
    try:
        repo = Repo(path_of_git_repo)
        repo.git.add(update=True)
        repo.index.commit(commit_message)
        origin = repo.remote(name='origin')
        origin.push()
        print('Successfully pushed into repository')
    except:
        print('Some error occured while pushing the code')  

def on_press(key):
    try:
        None
    except AttributeError:
        print('special key {0} pressed'.format(
            key))

def on_release(key):
    if key == keyboard.Key.enter:
        print('Your commit message: ', msg, '\nPress escape key to confirm\nPress delete key to discard')
    if key == keyboard.Key.esc:
        # Stop listener
        git_push(PATH_OF_GIT_REPO, msg)
        return False
    if key == keyboard.Key.delete:
        return False


global msg, PATH_OF_GIT_REPO

data = read_from_data(filename)
path_of_git_repo = data[0]

PATH_OF_GIT_REPO = path_of_git_repo
msg = input('Enter commit message: ')

# Collect events until released
with keyboard.Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()

# ...or, in a non-blocking fashion:
listener = keyboard.Listener(
    on_press=on_press,
    on_release=on_release)
listener.start()