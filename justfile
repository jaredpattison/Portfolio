# commons-pi justfile template version: 2026-05-29
# Canonical template. Sync to projects with:
#   just sync-project-justfile /path/to/project
#
# Project-specific configuration belongs in the target project's .env:
#   COMMONS_ROOT=/absolute/path/to/commons

set dotenv-load := true
set shell := ["bash", "-cu"]

commons_root := env_var_or_default("COMMONS_ROOT", justfile_directory() + "/..")
ext          := commons_root + "/pi/extensions"

default:
    @just --list

# Unified interactive workflow: orchestrator → scout → builder → reviewer
work desc='':
    export AGENT_TEAM_LEAD=orchestrator AGENT_TEAM=work COMMONS_PROJECT_DIR={{commons_root}}; \
    if [ -n "{{desc}}" ]; then \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts "{{desc}}"; \
    else \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts; \
    fi

# Normal main coding session plus optional dispatch_agent access to scout
assist desc='':
    export AGENT_TEAM_MODE=assist AGENT_TEAM=scout-only COMMONS_PROJECT_DIR={{commons_root}}; \
    if [ -n "{{desc}}" ]; then \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts "{{desc}}"; \
    else \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts; \
    fi

# Normal main coding session plus four independently dispatchable scouts
scouts desc='':
    export AGENT_TEAM_MODE=assist AGENT_TEAM=scouts COMMONS_PROJECT_DIR={{commons_root}}; \
    if [ -n "{{desc}}" ]; then \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts "{{desc}}"; \
    else \
      pi -e {{ext}}/seatbelt.ts -e {{ext}}/agent-team.ts -e {{ext}}/deciduous.ts; \
    fi


# End-of-session Deciduous cleanup/status maintenance.
graph-maint:
    COMMONS_PROJECT_DIR={{commons_root}} \
    pi -p -e {{ext}}/deciduous.ts \
       "$(cat {{commons_root}}/shared/prompts/graph-maintenance.md)"
