#!/bin/bash
# inspiration: https://github.com/spatie/project-skeleton-php/blob/main/configure-skeleton.sh
# 'return' when run as "source <script>" or ". <script>", 'exit' otherwise
[[ "$0" != "${BASH_SOURCE[0]}" ]] && safe_exit="return" || safe_exit="exit"

script_name=$(basename "$0")

ask_question() {
    # ask_question <question> <default>
    local ANSWER
    read -e -r -p "$1 ($2): " ANSWER
    echo "${ANSWER:-$2}"
}

confirm() {
    # confirm <question> (default = N)
    local ANSWER
    read -e -r -p "$1 (y/N): " -n 1 ANSWER
    echo " "
    [[ "$ANSWER" =~ ^[Yy]$ ]]
}

current_directory=$(pwd)
folder_name=$(basename "$current_directory")

project_name=$(ask_question "Project name" "$folder_name")
project_description=$(ask_question "Project description" "")

echo ""
echo -e "------"
echo -e "Project   : $project_name <$project_description>"
echo -e "------"
echo ""

files=$(grep -E -r -l -i "myapp|project_description" --exclude-dir=node_modules ./* . ./.github/* | grep -v $script_name)

echo "This script will replace the above values in all relevant files in the project directory."
echo "Files that will be modified:"
echo "$files"
echo ""

if ! confirm "Modify files?"; then
    $safe_exit 1
fi

grep -E -r -l -i "myapp|project_description" --exclude-dir=node_modules ./* . ./.github/* \
| grep -v "$script_name" \
| while read -r file ; do
    new_file="$file"

    echo "adapting file $file -> $new_file"
        temp_file="$file.temp"
        < "$file" \
          sed "s#myapp#$project_name#g" \
        | sed "s#project_description#$project_description#g" \
        | sed "#^\[\]\(delete\) #d" \
        > "$temp_file"
        rm -f "$file"
        mv "$temp_file" "$new_file"
done

mv project.README.md README.md

if confirm 'Let this script delete itself (since you only need it once)?'; then
    echo "Delete $0 !"
    sleep 1 && rm -- "$0"
fi
