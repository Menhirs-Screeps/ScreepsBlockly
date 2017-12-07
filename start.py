#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Entry point for the web application.
"""
from __future__ import unicode_literals, absolute_import, print_function
import os
import re
import sys
import struct
import getopt
import platform
import threading
import webbrowser

import server.server

# Server IP and PORT settings
SERVER_IP = 'localhost'
SERVER_PORT = 8000

def find_web_dir(search_path):
    """Find the web project directory absolute path.

    Navigates within each node of given path and tries to find the web
    project root directory. Assumes that the project root will have an folder
    name web with an index.html file inside.
    This function is required because this script can end up in executable form
    in different locations of the project folder depending on the platform.

    :param search_path: Path starting point to search the web project
            root folder.
    :return: Path to the web root folder. If not found returns None.
    """
    path_to_navigate = os.path.normpath(search_path)
    # Navigate through each path node from the bottom up
    while path_to_navigate:
        # Check if file web/index.html exists within current path
        if os.path.isfile(
                os.path.join(path_to_navigate, 'web', 'index.html')):
            # Found the right folder
            return path_to_navigate
        path_to_navigate = os.path.dirname(path_to_navigate)
    # The right folder wasn't found, so return None to indicate failure
    return None

def parsing_cl_args():
    """Process the command line arguments.

    Arguments supported:
    -h / --help
    -s / --serverroot <working directory>
    :return: Dictionary with available options(keys) and value(value).
    """
    # Set option defaults
    launch_browser = False
    server_root = None
    find_project_root = False

    if len(sys.argv) == 1:
        print("No command line arguments found.")
    else:
        try:
            opts, args = getopt.getopt(
                sys.argv[1:],
                'hs:bf',
                ['help', 'serverroot=', 'nobrowser', 'findprojectroot'])
        except getopt.GetoptError as e:
            print('There was a problem parsing the command line arguments:')
            print('\t%s' % e)
            sys.exit(1)

        for opt, arg in opts:
            if opt in ('-h', '--help'):
                print('Help flag parsed, these are the current options:\n')
                print('\t-s <folder>\tSets the server working directory.')
                print('\t-b\t\tOpens the local browser.')
                sys.exit(0)
            if opt in ('-s', '--serverroot'):
                # Windows only issue: In BlocklyRequestHandler, if chdir is fed
                # an 'incorrect' path like 'C:' instead of 'C:\' or C:/' it
                # fails silently maintaining the current working directory.
                # Use regular expressions to catch this corner case.
                if re.match("^[a-zA-Z]:$", arg):
                    print('The windows drive letter needs to end in a slash, '
                          'eg. %s\\' % arg)
                    sys.exit(1)
                # Check if the value is a valid directory
                arg = os.path.normpath(arg)
                if os.path.isdir(arg):
                    server_root = arg
                    print('Parsed "%s" flag with "%s" value.' % (opt, arg))
                else:
                    print('Invalid directory "' + arg + '".')
                    sys.exit(1)
            elif opt in ('-b', '--browser'):
                launch_browser = True
                print('Parsed "%s" flag. Browser will be opened.' % opt)
            elif opt in ('-f', '--findprojectroot'):
                find_project_root = True
                print('Parsed "%s" flag. The ardublockly project root will be '
                      'set as the server root directory.' % opt)
            else:
                print('Flag "%s" not recognised.' % opt)

    return find_project_root, launch_browser, server_root

def main():
    """Entry point for the application.

    Initialises the Settings singleton, resolves paths, and starts the server.
    """
    print('Running Python %s (%s bit) on %s' % (platform.python_version(),
          (struct.calcsize('P') * 8), platform.platform()))
    if os.path.isdir(server.local_packages_path):
        print('Local packages: %s' % server.local_packages_path)
    else:
        print('Not using local-packages, likely running packaged.')

    print('\n======= Parsing Command line arguments =======')
    find_project_root, launch_browser, server_root = parsing_cl_args()

    print('\n======= Resolving server and project paths =======')
    # Based on command line options, set the server root to the web
    # project root directory, a directory specified in the arguments, or by
    # default to the project root directory.
    this_file_dir = os.path.dirname(os.path.realpath(sys.argv[0]))
    web_root_dir = find_web_dir(this_file_dir)
    if web_root_dir is None:
        print('The web project root folder could not be found within '
              'the %s directory !' % this_file_dir)
        sys.exit(1)
    print('web root directory:\n\t%s' % web_root_dir)
    os.chdir(web_root_dir)
    print('Current working directory set to:\n\t%s' % os.getcwd())

    if find_project_root is True or server_root is None:
        server_root = web_root_dir
    else:
        # Arguments have set a server root, and to not find web dir
        if not os.path.commonprefix([server_root, web_root_dir]):
            print('The web project folder needs to be accessible from '
                  'the server root directory !')
    print('Selected server root:\n\t%s' % server_root)
    print('Selected server ip:\n\t%s' % SERVER_IP)
    print('Selected server port:\n\t%s' % SERVER_PORT)

    print('\n======= Starting Server =======')
    if launch_browser:
        open_browser(ip=SERVER_IP, port=SERVER_PORT)

    server.server.launch_server(
            ip=SERVER_IP, port=SERVER_PORT, document_root_=server_root)

if __name__ == '__main__':
    main()
