<?php

namespace Nick\NovaScheduledJobs\Http\Controllers;

use Illuminate\Http\Request;
use Nick\NovaScheduledJobs\Rules\JobExist;

class DispatchJobController
{
    /**
     * Dispatch job command.
     *
     * @param  \Illuminate\Http\Request $request
     */
    public function create(Request $request)
    {
        $command = array_first(explode(' ', $request->get('command')));

        if (in_array($command, array_keys(Artisan::all()))) {
            return command($command);
        }

        $data = $request->validate([
            'command' => ['required', 'string', new JobExist]
        ]);

        $command = resolve($data['command']);

        dispatch($command);
    }
}
