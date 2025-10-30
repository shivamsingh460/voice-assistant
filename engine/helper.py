import re


def extract_yt_term(command):
    #define a regular expression pattern to camture thge song name
    pattern = r'play\s+(.*?)\s+on\s+youtube'
    #use re search to cfind thematch in command
    match = re.search(pattern, command, re.IGNORECASE)
    #if the match is found, return the extracted song name ; otherwise , return none
    return match.group(1) if match else None